const express = require("express");
const router = express.Router();

const {
  getAllComments,
  addComment,
  removeComment,
  updateComment,
} = require("../controllers/comments.js");

router.get("/", async (req, res) => {
  const result = await getAllComments();
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
