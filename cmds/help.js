const menus = {
  main: `
    jarvis [command] <options>
    
    today ............ show weather for today
    forecast ......... show weather forecast for next 5 days
    version .......... show package version
    help ............. show help menu for a command`,

  today: `
    jarvis today <options>

    --location, -l ..... the location to use`,

  forecast: `
    jarvis forecast <options>

    --location, -l ..... the location to use`,
};

module.exports = (args) => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
