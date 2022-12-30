const ora = require("ora");
const weatherData = require("../utils/weather_today");
const getLocation = require("../utils/location");

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    const location = args.location || args.l || (await getLocation());
    const weather = await weatherData(location);

    spinner.stop();

    const tempInCelsius = Math.round(weather.main.temp - 273.15);

    // converting location first letter to uppercase if not typed so
    const modifiedLocation =
      location.charAt(0).toUpperCase() + location.slice(1);

    console.log(`Present conditions in ${modifiedLocation}:`);
    console.log(`\t${tempInCelsius}°C | ${weather.weather[0].main}`);
  } catch (err) {
    spinner.stop();

    console.error(err);
  }
};
