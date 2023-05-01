const mongoose = require("mongoose");
require("dotenv").config();

//connecting to  mongoDB using mongoose

const connection = mongoose.connect(process.env.MONGO_URL);

module.exports = { connection };
