const express = require("express");
const {
  postOrders,
  getBuyOrders,
  getSellOrders,
  updateBuyOrders,
  updateSellOrders,
  deleteBuyOrders,
  deleteSellOrders,
} = require("../controller/orderController");
const orderRoute = express.Router();

orderRoute.post("/", postOrders);
orderRoute.get("/buyer", getBuyOrders);
orderRoute.get("/seller", getSellOrders);
orderRoute.patch("/buyer/:id", updateBuyOrders);
orderRoute.patch("/seller/:id", updateSellOrders);
orderRoute.delete("/buyer/:id", deleteBuyOrders);
orderRoute.delete("/seller/:id", deleteSellOrders);

module.exports = {
  orderRoute,
};
