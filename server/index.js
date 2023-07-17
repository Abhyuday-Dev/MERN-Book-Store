// require('dotenv').config();
// const express = require("express");
// const mongoose = require("mongoose");
// require("./MongoDB/connect");
// const bookRoute = require("./routes/booksRoutes");
// const cors = require("cors");


// const PORT = process.env.PORT || 8080;
// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/v1", bookRoute);

// mongoose.connection.once("open", () => {
//   app.listen(PORT, () => {
//     console.log('MONGO_URI:', process.env.MONGO_URL);
//     console.log(`Server Started on port ${PORT}`);
//   });
// });

require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();
const connectDB = require('./MongoDB/connect');
const bookRoute = require("./routes/booksRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/v1", bookRoute);

// Connect to MongoDB
connectDB();

// Your other backend application setup and routes go here

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

