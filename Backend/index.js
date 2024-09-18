const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const mainRouter = require("./routes/index");
app.use("/api/v1", mainRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

// server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
