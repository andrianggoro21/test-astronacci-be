const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const { validator } = require("../middleware/validator");
const { verifyToken } = require("../middleware/auth");

const {
  registerUserController,
  loginUserController,
  keepLoginController,
  googleLoginController,
  facebookLoginController,
} = require("../controllers/userController");

const registerValidations = [
  body("email").notEmpty().withMessage("Email cannot be emptied"),
  body("email").isEmail().withMessage("Email format is invalid"),
  body("username").notEmpty().withMessage("Username cannot be emptied"),
  body("password")
    .notEmpty()
    .withMessage("Password cannot be emptied")
    .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    .withMessage(
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
];

const loginValidations = [
  body("email").notEmpty().withMessage("Email cannot be emptied"),
  body("email").isEmail().withMessage("Email format is invalid"),
  body("password")
    .notEmpty()
    .withMessage("Password cannot be emptied")
    .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    .withMessage(
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
];

router.post(
  "/registration",
  validator(registerValidations),
  registerUserController
);
router.post("/login", validator(loginValidations), loginUserController);
router.get("/keep-login", verifyToken, keepLoginController);
router.post("/google-login", googleLoginController);
router.post("/facebook-login", facebookLoginController);

module.exports = router;
