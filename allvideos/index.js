const express = require("express");

const Router = express.Router();
const restRouter = require("./videos");
const userRouter = require("./users")
const likesRouter = require("./users")


Router.use("/", restRouter);
Router.use("/user", userRouter)
Router.use("/likes", likesRouter)
module.exports = Router;
