const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  registerUserQuery,
  findUserQuery,
  keepLoginQuery,
  registerGoogleQuery,
  registerFacebookQuery,
} = require("../queries/userQuery");

const registerUserService = async (username, email, password) => {
  try {
    const checkUser = await findUserQuery(email);
    if (checkUser) {
      throw new Error("User already exists");
    }

    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);
    password = hashedPassword;

    const res = await registerUserQuery(username, email, password);
    return res;
  } catch (error) {
    throw error;
  }
};

const loginUserService = async (email, password) => {
  try {
    const checkUser = await findUserQuery(email);
    if (!checkUser) {
      throw new Error("User not found");
    }
    const isMatch = await bycrypt.compare(password, checkUser.password);
    if (!isMatch) {
      throw new Error("Wrong password");
    }

    let user = {
      id: checkUser.id,
      username: checkUser.username,
      email: checkUser.email,
      membershipTypeId: checkUser.membershipTypeId,
    };

    const token = jwt.sign(user, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    return { user, token };
  } catch (error) {
    throw error;
  }
};

const keepLoginService = async (id) => {
  try {
    const res = await keepLoginQuery(id);
    if (!res) {
      throw new Error("User not found");
    }
    return res;
  } catch (error) {
    throw error;
  }
};

const googleLoginService = async (email, username) => {
  try {
    let checkUser = await findUserQuery(email);
    if (!checkUser) {
      checkUser = await registerGoogleQuery(email, username);
    }
    let user = {
      id: checkUser.id,
      username: checkUser.username,
      email: checkUser.email,
      membershipTypeId: checkUser.membershipTypeId,
    };
    const token = jwt.sign(user, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    return { user, token };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const facebookLoginService = async (email, username) => {
  try {
    let checkUser = await findUserQuery(email);
    if (!checkUser) {
      checkUser = await registerFacebookQuery(email, username);
    }
    let user = {
      id: checkUser.id,
      username: checkUser.username,
      email: checkUser.email,
      membershipTypeId: checkUser.membershipTypeId,
    };
    const token = jwt.sign(user, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    return { user, token };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  registerUserService,
  loginUserService,
  keepLoginService,
  googleLoginService,
  facebookLoginService,
};
