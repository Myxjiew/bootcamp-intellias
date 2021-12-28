const mongoose = require("mongoose");

async function connect() {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://admin:admin@bci-mongodb.ru25h.mongodb.net/BCI-MongoDB?retryWrites=true&w=majority"
    );
    console.log("Connected!");
    return connection;
  } catch (error) {
    console.error("Connection failed!", error.message);
  }
}
module.exports = connect;
