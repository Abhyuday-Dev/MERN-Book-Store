const express = require("express");
const mongoose = require("mongoose");
require("./MongoDB/connect");
const bookRoute = require("./routes/booksRoutes");
const cors = require("cors");

const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", bookRoute);

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
  });
});
