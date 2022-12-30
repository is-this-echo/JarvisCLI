const ora = require("ora");
const weatherData = require("../utils/weather_forecast");

const kelvinToCelsius = (temp) => {
  return Math.round(temp - 273.15);
};

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    const location = args.location || args.l;
    const weather = await weatherData(location);

    spinner.stop();

    // converting location first letter to uppercase if not typed so
    const modifiedLocation =
      location.charAt(0).toUpperCase() + location.slice(1);

    // taking the forecast at noon time, among others
    const forecastData = weather.list.filter((day) => {
      return day.dt_txt.split(" ")[1] == "12:00:00";
    });

    console.log(`Forecast for ${modifiedLocation}:`);
    forecastData.forEach((day) => {
      let minTemp = kelvinToCelsius(day.main.temp_min);
      let maxTemp = kelvinToCelsius(day.main.temp_max);
      let weatherDesc = day.weather[0].main;

      console.log(
        `\t${day.dt_txt} - Low: ${minTemp}°C | High: ${maxTemp}°C | ${weatherDesc}`
      );
    });
  } catch (err) {
    spinner.stop();

    console.error(err);
  }
};
