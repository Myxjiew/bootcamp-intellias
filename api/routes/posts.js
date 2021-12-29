const express = require("express");
const router = express.Router();

const {
  getPosts,
  getPost,
  addPosts,
  removePost,
  updatePost,
} = require("../controllers/posts.js");

router.get("/", async (req, res) => {
  res.send(await getPosts());
});
router.get("/:id", async (req, res) => {
  res.send(await getPost(req.params.id));
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
