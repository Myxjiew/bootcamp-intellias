const express = require("express");
const router = express.Router();

const { getAllTags, addTag, removeTag } = require("../controllers/tags.js");

router.get("/", async (req, res) => {
  const result = await getAllTags();
  res.send(result);
});
router.post("/", async (req, res) => {
  const result = await addTag(req.body);
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const result = await removeTag(req.params.id);
  res.send(result);
});

module.exports = router;
