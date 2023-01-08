const ora = require("ora");

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    const dict = await require("../assets/simple_english_dictionary.json");
    spinner.stop();

    console.log(dict[args._[1]]);
  } catch (err) {
    spinner.stop();
    console.error(err);
  }
};
