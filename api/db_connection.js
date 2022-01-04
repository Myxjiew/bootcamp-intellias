const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function connect() {
  try {
    const connection = await mongoose.connect(process.env.DB_URI);
    console.log("Connected!");
    return connection;
  } catch (error) {
    console.error("Connection failed!", error.message);
  }
}
module.exports = connect;
