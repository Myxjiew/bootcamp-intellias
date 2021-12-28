const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  addPosts,
  removePost,
  updatePost,
} = require("../controllers/posts.js");

router.get("/", async (req, res) => {
  res.send(await getAllPosts());
});
router.post("/", async (req, res) => {
  res.send(await addPosts(req.body));
});
router.patch("/:id", async (req, res) => {
  res.send(await updatePost(req.params.id, req.body));
});
router.delete("/:id", async (req, res) => {
  res.send(await removePost(req.params.id));
});

module.exports = router;
