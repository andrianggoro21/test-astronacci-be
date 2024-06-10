const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

// const db = require("./models");
// db.sequelize.sync({alter: true})

const PORT = process.env.PORT || 8080;

const app = new express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      process.env.FE_BASE_URL &&
        process.env.FE_BASE_URL.split(" "),
    ],
  })
);
const userRouter = require("./routers/userRouter.js");
app.use("/user", userRouter);

const contentRouter = require("./routers/contentRouter.js");
app.use("/content", contentRouter);

app.listen(PORT, (req, res) => {
  console.log(`server started on port ${PORT}`);
});
