const { Tag } = require("../models/tag");

async function getAll() {
  return Tag.find({});
}

async function getOne(id) {
  return Tag.findOne({ _id: id });
}

async function remove(id) {
  return Tag.deleteOne({ _id: id });
}

async function add(tag) {
  return Tag.create(tag);
}

async function update(id, data) {
  return Tag.findOneAndUpdate(id, data);
}

module.exports = {
  getAll,
  getOne,
  remove,
  add,
  update,
};
