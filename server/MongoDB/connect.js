const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.MONGODB_URL;

mongoose.connect(URL)
  .then(() => console.log("Database Connected"))
  .catch(err => console.error("Error connecting to database:", err))