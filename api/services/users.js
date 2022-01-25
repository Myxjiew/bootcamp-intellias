const { getAll, getOne, update, remove, add } = require("../repository/user");

async function getAllUsers() {
  return getAll();
}
async function getOneUser(id) {
  return getOne(id);
}
async function updateUser(id, data) {
  return update(id, data);
}
async function removeUser(id) {
  return remove(id);
}
async function addUser(data) {
  return add(data);
}

module.exports = {
  getAllUsers,
  getOneUser,
  updateUser,
  removeUser,
  addUser,
};
