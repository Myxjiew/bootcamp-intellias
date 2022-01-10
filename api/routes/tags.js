const express = require("express");
const router = express.Router();

const {
  getTags,
  getTag,
  addTag,
  updateTag,
  removeTag,
} = require("../controllers/tags.js");

router.get("/", async (req, res) => {
  const result = await getTags();
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const result = await getTag(req.params.id);
  res.send(result);
});

router.post("/", async (req, res) => {
  const result = await addTag(req.body);
  res.send(result);
});

router.patch("/:id", async (req, res) => {
  const result = await updateTag(req.params.id, req.body);
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const result = await removeTag(req.params.id);
  res.send(result);
});

module.exports = router;
