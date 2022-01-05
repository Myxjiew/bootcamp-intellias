const express = require("express");
const router = express.Router();

const {
  getPosts,
  getPost,
  addPost,
  removePost,
  updatePost,
} = require("../controllers/posts.js");

router.get("/", async (req, res) => {
  const result = await getPosts();
  res.send(result);
});
router.get("/:id", async (req, res) => {
  const result = await getPost(req.params.id);
  res.send(result);
});
router.post("/", async (req, res) => {
  const result = await addPost(req.body);
  res.send(result);
});
router.patch("/:id", async (req, res) => {
  const result = await updatePost(req.params.id, req.body);
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const result = await removePost(req.params.id);
  res.send(result);
});

module.exports = router;
