const axios = require("axios");

const {
  youtubePlaylistApiUrl,
  youtubePlaylistApiKey,
  youtubePlaylistId,
} = require("../config/environment");

const YOUTUBE_PLAYLIST_URL = `${youtubePlaylistApiUrl}?part=snippet&maxResults=10&playlistId=${youtubePlaylistId}&key=${youtubePlaylistApiKey}`;

module.exports = async (args) => {
  const results = await axios({
    method: "get",
    url: YOUTUBE_PLAYLIST_URL,
    params: {
      mode: "json",
    },
  });

  return results.data;
};
