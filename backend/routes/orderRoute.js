const express = require("express");
const {
  postOrders,
  postCompletedOrders,
  getBuyOrders,
  getSellOrders,
  deleteBuyOrders,
  deleteSellOrders,
  updateAll,
  getCompletedOrder,
  getAllOrders,
} = require("../controller/orderController");

const orderRoute = express.Router();

//segregating all routes and endpoints
orderRoute.get("/",getAllOrders)
orderRoute.post("/", postOrders);
orderRoute.post("/completed", postCompletedOrders);
orderRoute.get("/completed", getCompletedOrder);
orderRoute.post("/updateall",updateAll)
orderRoute.get("/buyer", getBuyOrders);
orderRoute.get("/seller", getSellOrders);
orderRoute.delete("/buyer/:id", deleteBuyOrders);
orderRoute.delete("/seller/:id", deleteSellOrders);

module.exports = {
  orderRoute,
};
