
require('dotenv').config();
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



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

