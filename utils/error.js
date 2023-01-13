module.exports = (message, exit) => {
  console.error(`${message}`.brightRed);
  exit && process.exit(1);
};
