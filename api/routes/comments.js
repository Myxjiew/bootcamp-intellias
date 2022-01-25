const express = require("express");
const router = express.Router();

const {
  getComments,
  getComment,
  postComment,
  deleteComment,
  patchComment,
} = require("../controllers/comments.js");

router.get("/", getComments);
router.get("/:id", getComment);
router.post("/", postComment);
router.patch("/:id", patchComment);
router.delete("/:id", deleteComment);

module.exports = router;
