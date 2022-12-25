const minimist = require("minimist");

module.exports = () => {
  const args = minimist(process.argv.slice(2));

  // default command if nothing else is mentioned wiht the cli
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

    default:
      console.error(` "${cmd}" is not a valid command!`);
      break;
  }
};
