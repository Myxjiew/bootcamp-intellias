const express = require("express");
const postsRouter = require("./posts.js");
const usersRouter = require("./users.js");
const commentsRouter = require("./comments.js");
const tagsRouter = require("./tags.js");
const router = express.Router();

router.use("/posts", postsRouter);
router.use("/users", usersRouter);
router.use("/comments", commentsRouter);
router.use("/tags", tagsRouter);
router.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = router;
