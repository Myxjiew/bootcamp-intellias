const express = require("express");
const router = express.Router();

const { getAllTags, addTag, removeTag } = require("../controllers/tags.js");

router.get("/", async (req, res) => {
  res.send(await getAllTags());
});
router.post("/", async (req, res) => {
  res.send(await addTag(req.body));
});
router.delete("/:id", async (req, res) => {
  res.send(await removeTag(req.params.id));
});

module.exports = router;
