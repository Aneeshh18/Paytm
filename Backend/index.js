const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const mainRouter = require("./routes/index");
app.use("/api/v1", mainRouter);

// server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
