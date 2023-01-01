const ora = require("ora");
const weatherData = require("../utils/weather_forecast");
const getLocation = require("../utils/location");

const kelvinToCelsius = (temp) => {
  return Math.round(temp - 273.15);
};

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    const location = args.location || args.l || (await getLocation());
    const weather = await weatherData(location);

    spinner.stop();

    // converting location first letter to uppercase if not typed so
    const modifiedLocation =
      location.charAt(0).toUpperCase() + location.slice(1);

    // taking the forecast at noon time, among others
    const forecastData = weather.list.filter((day) => {
      return day.dt_txt.split(" ")[1] == "12:00:00";
    });

    //formatting date from day.dt_txt
    const getFormattedDate = (dateString) => {
      const dateObj = new Date(dateString);
      const date = dateObj.getDate();
      const year = dateObj.getFullYear();
      const month = dateObj.toLocaleDateString("default", {
        month: "short",
      });
      return `${date} ${month} ${year}`;
    };

    console.log(` Forecast for ${modifiedLocation}:`);
    forecastData.forEach((day) => {
      //as we are not assigning different values to declared variables, we can keep them as const
      const minTemp = kelvinToCelsius(day.main.temp_min);
      const maxTemp = kelvinToCelsius(day.main.temp_max);
      const weatherDesc = day.weather[0].main;
      const date = getFormattedDate(day.dt_txt);

      console.log(
        ` \t${date} - Low: ${minTemp}°C | High: ${maxTemp}°C | ${weatherDesc}`
      );
    });
  } catch (err) {
    spinner.stop();
    console.error(err);
  }
};
