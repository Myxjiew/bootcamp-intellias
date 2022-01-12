const express = require("express");
const router = express.Router();

const {
  getPosts,
  getPost,
  postPost,
  deletePost,
  patchPost,
} = require("../controllers/posts.js");

router.get("/", async (req, res) => {
  const result = await getPosts();
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const result = await getPost(req.params.id);
  res.send(result);
});

router.post("/", postPost);
router.patch("/:id", patchPost);
router.delete("/:id", deletePost);

module.exports = router;
