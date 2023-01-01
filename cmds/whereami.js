const ora = require("ora");
const getLocation = require("../utils/location");

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    const location = await getLocation();

    spinner.stop();

    console.log(` looks like you are at ${location}...`);
    console.log(` playing Jarvis-cli on your terminal :)`);
  } catch (error) {
    spinner.stop();
    console.log(error);
  }
};
