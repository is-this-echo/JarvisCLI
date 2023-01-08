const menus = {
  main: `
    jarvis [command] <options>
    
    today ............ show weather for today
    forecast ......... show weather forecast for next 5 days
    whereami ......... gives your current location on earth
    meaning .......... provides the meaning of input word
    version .......... show package version
    help ............. show help menu for a command`,

  today: `
    jarvis today <options>

    --location, -l ..... the location to use`,

  forecast: `
    jarvis forecast <options>

    --location, -l ..... the location to use`,

  whereami: `
    jarvis whereami 

    .... tell your current location on earth
  `,

  meaning: `
    jarvis meaning <word>

    .... outputs the meaning of given word
  `,
};

module.exports = (args) => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
