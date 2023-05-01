const express = require("express");
const cors = require("cors");
//Initializing Express App
const app = express();

//for using dotenv file
require("dotenv").config();
const { connection } = require("./connection/connection.js");
const { orderRoute } = require("./routes/orderRoute.js");

//Cors Middlewares  for cross-origin-sharing
app.use(cors());

//Parsing Middleware for parsing stringified data
app.use(express.json());
app.use("/orders", orderRoute);

//Listening to the server
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to MongoDB", process.env.PORT);
  } catch (error) {
    console.log(error);
  }
});
