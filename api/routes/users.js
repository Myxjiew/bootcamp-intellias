const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  removeUser,
} = require("../controllers/users.js");

router.get("/", async (req, res) => {
  const result = await getUsers();
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const result = await getUser(req.params.id);
  res.send(result);
});

router.post("/", async (req, res) => {
  const result = await addUser(req.body);
  res.send(result);
});

router.patch("/:id", async (req, res) => {
  const result = await updateUser(req.params.id, req.body);
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const result = await removeUser(req.params.id);
  res.send(result);
});

module.exports = router;
