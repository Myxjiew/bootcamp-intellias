const {
  getAllUsers,
  getOneUser,
  updateUser,
  addUser,
  removeUser,
} = require("../services/users");

async function getUsers(req, res) {
  try {
    const result = await getAllUsers();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function getUser(req, res) {
  try {
    const id = req.params.id;
    const result = await getOneUser(id);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function postUser(req, res) {
  try {
    const data = req.body;
    const result = await addUser(data);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function patchUser(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await updateUser(id, data);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const result = await removeUser(id);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getUsers,
  getUser,
  postUser,
  patchUser,
  deleteUser,
};
