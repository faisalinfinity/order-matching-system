const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  status: { type: String, required: true },
});

const buyerModel = mongoose.model("buyer", orderSchema);
const sellerModel = mongoose.model("seller", orderSchema);

module.exports = {
  buyerModel,
  sellerModel,
};
