const express = require("express");
const router = express.Router();

const {
  getComments,
  getComment,
  addComment,
  removeComment,
  updateComment,
} = require("../controllers/comments.js");

router.get("/", async (req, res) => {
  const result = await getComments();
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const result = await getComment(req.params.id);
  res.send(result);
});

router.post("/", async (req, res) => {
  const result = await addComment(req.body);
  res.send(result);
});

router.patch("/:id", async (req, res) => {
  const result = await updateComment(req.params.id, req.body);
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const result = await removeComment(req.params.id);
  res.send(result);
});

module.exports = router;
