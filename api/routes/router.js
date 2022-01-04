const express = require("express");
const data = require("../data.json");
const router = express.Router();

router.get("/posts", (req, res) => {
  res.json(data);
});

router.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = router;
