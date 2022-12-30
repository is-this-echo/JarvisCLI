const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

module.exports = {
  weatherBaseUrl: process.env.API_BASE_URL,
  weatherKeyName: process.env.API_KEY_NAME,
  weatherApiKey: process.env.API_KEY_VALUE,
};
