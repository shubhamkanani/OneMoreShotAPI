const express = require("express")
const { createuserdata, createlikeuserdata } = require("../users/users.controller");


const usersRouter = express.Router();
usersRouter.route("/newuser").post(createuserdata)
usersRouter.route("/likesuser").post(createlikeuserdata)


module.exports = usersRouter