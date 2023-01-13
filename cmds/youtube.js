const ora = require("ora");
const youtubeData = require("../utils/youtube_api");

module.exports = async (args) => {
  const spinner = ora().start();
  try {
    const data = await youtubeData(args);

    spinner.stop();

    data.items.map(({ id, snippet = {} }) => {
      const { title, resourceId = {} } = snippet;
      console.log(
        `${title}`.brightCyan,
        "   ",
        `https://www.youtube.com/watch?v=${resourceId.videoId}`.underline.green
      );
    });
  } catch (err) {
    spinner.stop();
    console.log(err);
  }
};
