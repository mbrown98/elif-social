const express = require("express");

const connectDB = require("./config/db");

const app = express();

connectDB();

app.get("/", (req, res) => res.send("Working"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("running on port ", PORT);
});
