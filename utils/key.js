const inquirer = require("inquirer");
const KeyManager = require("../lib/KeyManager");
const { isRequired } = require("../utils/validations");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API Key ".green + "https://api.openweathermap.org",
        validate: isRequired,
      },
    ]);

    const key = keyManager.setKey(input.key);

    if (key) {
      console.log("API Key Set".brightBlue);
    }
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log("Current API Key: ", key.brightYellow);

      return key;
    } catch (err) {
      console.error(err.message.brightRed);
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();

      console.log("API Key Removed!".brightBlue);

      return;
    } catch (err) {
      console.error(err.message.brightRed);
    }
  },
};

module.exports = key;
