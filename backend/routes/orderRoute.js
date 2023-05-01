const express = require("express");
const {
  postOrders,
  postCompletedOrders,
  getBuyOrders,
  getSellOrders,
  updateBuyOrders,
  updateSellOrders,
  deleteBuyOrders,
  deleteSellOrders,
  updateAll,
  getCompletedOrder,
  getAllOrders,
} = require("../controller/orderController");
const orderRoute = express.Router();
orderRoute.get("/",getAllOrders)
orderRoute.post("/", postOrders);
orderRoute.post("/completed", postCompletedOrders);
orderRoute.get("/completed", getCompletedOrder);
orderRoute.post("/updateall",updateAll)
orderRoute.get("/buyer", getBuyOrders);
orderRoute.get("/seller", getSellOrders);
orderRoute.patch("/buyer/:id", updateBuyOrders);
orderRoute.patch("/seller/:id", updateSellOrders);
orderRoute.delete("/buyer/:id", deleteBuyOrders);
orderRoute.delete("/seller/:id", deleteSellOrders);

module.exports = {
  orderRoute,
};
