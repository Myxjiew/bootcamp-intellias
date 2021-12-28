const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  addUser,
  updateUser,
  removeUser,
} = require("../controllers/users.js");

router.get("/", async (req, res) => {
  res.send(await getAllUsers());
});
router.post("/", async (req, res) => {
  res.send(await addUser(req.body));
});
router.patch("/:id", async (req, res) => {
  res.send(await updateUser(req.params.id, req.body));
});
router.delete("/:id", async (req, res) => {
  res.send(await removeUser(req.params.id));
});

module.exports = router;
