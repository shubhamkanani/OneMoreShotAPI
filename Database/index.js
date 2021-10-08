const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/shortviedeo")
  .then(() => console.log("conection successful...."))
  .catch((e) => console.log(e));
