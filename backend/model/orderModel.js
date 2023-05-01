const mongoose = require("mongoose");

//creating schema for orderModel
const orderSchema = mongoose.Schema({
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  status: { type: String, required: true },
  type:{ type: String, required: true }
});

//creating orderModel
const orderModel = mongoose.model("order", orderSchema);


module.exports = {
  orderModel
};
