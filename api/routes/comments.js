const express = require("express");
const router = express.Router();

const {
  getAllComments,
  addComment,
  removeComment,
  updateComment,
} = require("../controllers/comments.js");

router.get("/", async (req, res) => {
  res.send(await getAllComments());
});

router.post("/", async (req, res) => {
  res.send(await addComment(req.body));
});

router.patch("/:id", async (req, res) => {
  res.send(await updateComment(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
  res.send(await removeComment(req.params.id));
});

module.exports = router;
