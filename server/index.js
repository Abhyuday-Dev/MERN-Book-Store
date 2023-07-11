const express = require("express");
const mongoose = require("mongoose");
require("./MongoDB/connect");
const bookRoute=require("./routes/booksRoutes");
const cors=require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1",bookRoute);

// Wait for MongoDB connection before starting the server
mongoose.connection.once("open", () => {
  app.listen(8080, () => {
    console.log("Server started on port 8080");
  });
});