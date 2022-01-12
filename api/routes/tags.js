const express = require("express");
const router = express.Router();

const {
  getTags,
  getTag,
  postTag,
  patchTag,
  deleteTag,
} = require("../controllers/tags.js");

router.get("/", getTags);
router.get("/:id", getTag);
router.post("/", postTag);
router.patch("/:id", patchTag);
router.delete("/:id", deleteTag);

module.exports = router;
