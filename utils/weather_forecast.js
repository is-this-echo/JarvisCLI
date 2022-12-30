const axios = require("axios");

const {
  weatherBaseUrl,
  weatherApiKey,
  weatherKeyName,
} = require("../config/environment");

module.exports = async (city) => {
  const API_BASE_URL = weatherBaseUrl;
  const API_KEY_NAME = weatherKeyName;
  const API_KEY_VALUE = weatherApiKey;

  const results = await axios({
    method: "get",
    url: `${API_BASE_URL}forecast?q=${city}&${API_KEY_NAME}=${API_KEY_VALUE}`,
    params: {
      mode: "json",
    },
  });

  return results.data;
};
