const {
  registerUserService,
  loginUserService,
  keepLoginService,
  googleLoginService,
  facebookLoginService,
} = require("../services/userService");

const registerUserController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const result = await registerUserService(username, email, password);
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUserService(email, password);
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

const keepLoginController = async (req, res) => {
  try {
    const { id } = req.user;
    const result = await keepLoginService(id);
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

const googleLoginController = async (req, res) => {
  try {
    const { email, username } = req.body;
    const response = await googleLoginService(email, username);
    return res.status(200).json({
      message: "success",
      data: response,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const facebookLoginController = async (req, res) => {
  try {
    const { email, username } = req.body;
    console.log("sudah masuk", email, username);
    const response = await facebookLoginService(email, username);
    return res.status(200).json({
      message: "success",
      data: response,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  registerUserController,
  loginUserController,
  keepLoginController,
  googleLoginController,
  facebookLoginController,
};
