const { Video } = require("../models");
const { Article } = require("../models");

const contentQuery = async (membershipType) => {
  try {
    let resArticles, resVideos;

    // Fetch articles based on membershipType
    switch (membershipType.membershipType) {
      case "A":
        if (membershipType.maxArticles > 0) {
          resArticles = await Article.findAll({
            limit: membershipType.maxArticles,
          });
        } else {
          resArticles = [];
        }
        break;
      case "B":
        if (membershipType.maxArticles > 0) {
          resArticles = await Article.findAll({
            limit: membershipType.maxArticles,
          });
        } else {
          resArticles = [];
        }
        break;
      case "C":
        resArticles = await Article.findAll();
        break;
      default:
        resArticles = [];
        break;
    }

    // Fetch videos based on membershipType
    switch (membershipType.membershipType) {
      case "A":
        if (membershipType.maxVideos > 0) {
          resVideos = await Video.findAll({
            limit: membershipType.maxVideos,
          });
        } else {
          resVideos = [];
        }
        break;
      case "B":
        if (membershipType.maxVideos > 0) {
          resVideos = await Video.findAll({
            limit: membershipType.maxVideos,
          });
        } else {
          resVideos = [];
        }
        break;
      case "C":
        resVideos = await Video.findAll();
        break;
      default:
        resVideos = [];
        break;
    }

    return { resArticles, resVideos };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  contentQuery,
};
