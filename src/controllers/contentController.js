const { contentService } = require("../services/contentService");

const contentController = async (req, res) => {
  try {
    const { id } = req.user;
    const result = await contentService(id);
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

module.exports = {
  contentController,
};
