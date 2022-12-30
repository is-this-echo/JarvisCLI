const axios = require("axios");

const { locationApiUrl, locationApiKey } = require("../config/environment");

module.exports = async () => {
  const results = await axios({
    method: "get",
    url: `${locationApiUrl}?api-key=${locationApiKey}`,
  });

  const { city, region } = results.data;

  return `${city}, ${region}`;
};
