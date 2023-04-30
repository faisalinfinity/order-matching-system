const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const {connection}=require("./connection/connection.js");
const { orderRoute } = require("./routes/orderRoute.js");

app.use(cors());

app.use(express.json());
app.use("/orders",orderRoute)

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to MongoDB", process.env.PORT);
  } catch (error) {
    console.log(error);
  }
});
