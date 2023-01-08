const minimist = require("minimist");
const error = require("./utils/error");

module.exports = () => {
  const args = minimist(process.argv.slice(2));

  // default command if nothing else is mentioned with the cli
  let cmd = args._[0] || "help";

  if (args.version || args.v) cmd = "version";

  if (args.help || args.h) cmd = "help";

  switch (cmd) {
    case "today":
      require("./cmds/today")(args);
      break;

    case "help":
      require("./cmds/help")(args);
      break;

    case "version":
      require("./cmds/version")(args);
      break;

    case "forecast":
      require("./cmds/forecast")(args);
      break;

    case "whereami":
      require("./cmds/whereami")(args);
      break;

    case "meaning":
      require("./cmds/meaning")(args);
      break;

    default:
      error(` "${cmd}" is not a valid command!`, true);
      break;
  }
};
