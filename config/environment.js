const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

module.exports = {
  weatherBaseUrl: process.env.API_BASE_URL,
  weatherKeyName: process.env.API_KEY_NAME,
  weatherApiKey: process.env.API_KEY_VALUE,

  locationApiUrl: process.env.API_LOCATION_URL,
  locationApiKey: process.env.API_LOCATION_KEY_VALUE,

  youtubePlaylistApiUrl: process.env.API_YOUTUBE_PLAYLIST_ITEMS_URL,
  youtubePlaylistApiKey: process.env.API_YOUTUBE_KEY_VALUE,
  youtubePlaylistId: process.env.YOUTUBE_PLAYLIST_ID,
};
