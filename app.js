const express = require("express");
const app = express();
const TikTokScraper = require("tiktok-scraper");
require("./Database/index");
var cors = require("cors");
const port = process.env.PORT || 9000;
const routes = require("./allvideos");
const { post } = require("./allvideos");
var bodyParser = require('body-parser');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization, Accept, Access-Control-Al" +
    "low-Methods"
  );
  res.header("X-Frame-Options", "deny");
  res.header("X-Content-Type-Options", "nosniff");

  next();
});
app.use(express.static("public"));
app.use("/api/_v1/videos", routes);
app.get("/", async (req, res) => {
  try {
    const posts = await TikTokScraper.user("@zachking", {
      number: 100,
      // sessionList: ["sid_tt=58ba9e34431774703d3c34e60d584475;"],
    });
    console.log(posts);
    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`server listen to the port no ${port}`);
});
