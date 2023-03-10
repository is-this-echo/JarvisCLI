const ora = require("ora");
const getLocation = require("../utils/location");

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    const location = await getLocation();

    spinner.stop();

    console.log(` looks like you are at ` + `${location}...`.brightCyan);
    console.log(` playing Jarvis-cli on your terminal :)`);
  } catch (err) {
    spinner.stop();
    console.log(err);
  }
};
