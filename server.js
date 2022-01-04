const express = require("express");
const path = require("path");
const parser = require("body-parser");
const app = express();
const port = 3333;
const router = require("./api/routes/router.js");
const connect = require("./api/db_connection.js");

(async function init() {
  app.use(express.static("dist/bootcamp-intellias"));

  app.use(parser.json());

  app.use("/api", router);

  app.all("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./dist/bootcamp-intellias/index.html"));
  });

  app.use((err, req, res) => {
    res.status(500).send(`Error occured: ${err.message}`);
  });

  const connection = await connect();

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
})();
