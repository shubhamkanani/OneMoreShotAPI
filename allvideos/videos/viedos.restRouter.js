const express = require("express");
const {
  getvideodata,
  createvideodata,
  updatevideodata,
  deletevideodata,
} = require("./videos.controller");

const usevideoRouter = express.Router();

usevideoRouter.route("/:id?").get(getvideodata);
usevideoRouter.route("/").post(createvideodata);
usevideoRouter.route("/:id").patch(updatevideodata);
usevideoRouter.route("/:id").delete(deletevideodata);

module.exports = usevideoRouter;
