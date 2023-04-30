const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  status: { type: String, required: true },
  type:{ type: String, required: true }
});

const orderModel = mongoose.model("order", orderSchema);


module.exports = {
  orderModel
};
