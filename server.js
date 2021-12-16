const express = require("express");
const path = require("path");
const app = express();
const port = 3333;
const router = require("./api/routes/router.js");

app.use(express.static("dist/bootcamp-intellias"));

app.use("/api", router);

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/bootcamp-intellias/index.html"));
});

app.use((err, req, res) => {
  res.status(500).send(`Error occured: ${err.message}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
