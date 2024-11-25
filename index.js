// Correct module inclusion
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from Home page!");
});
app.get("/about", (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});

// Handler function

// Create the server
app.listen(8000, () => console.log("server started!"));
