const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).send("Access denied. No token provided.");
    }
    
    token = token.split(" ")[1];
    if (token === "null" || !token) {
      return res.status(401).send("Unauthorized Token");
    }
    let decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("decoded", decoded);
    if (!decoded) {
      return res.status(401).send("Unauthorized Token");
    }
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  verifyToken,
};
