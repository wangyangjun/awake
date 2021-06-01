const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/time", (req, res) => {
  let milliseconds = new Date().getTime();
  res.send(milliseconds.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
