const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.get("/test", (req, res) => {
  res.json({
    hello: "test!",
  });
});

router.post("/testpost", (req, res) => {
  res.json({
    hello: "hit the POST!",
  });
});

app.use(
  `/.netlify/functions/app` /**'app' here must match name of functions output file which is also app (matching this file's name) */,
  router
);

module.exports = app;
module.exports.handler = serverless(app);
