const express = require("express");
const router = express.Router();

const {
  getPosts,
  getPost,
  postPost,
  deletePost,
  patchPost,
} = require("../controllers/posts.js");

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", postPost);
router.patch("/:id", patchPost);
router.delete("/:id", deletePost);

module.exports = router;
