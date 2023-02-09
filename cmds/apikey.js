const key = require("../utils/key");

module.exports = async (args) => {
  const subCmd = args._[1];

  try {
    switch (subCmd) {
      case "set":
        key.set();
        break;

      case "show":
        key.show();
        break;

      case "remove":
        key.remove();
        break;

      default:
        require("./help")(args);
        break;
    }
  } catch (err) {
    console.error(err);
  }
};
