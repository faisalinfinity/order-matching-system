const { orderModel } = require("../model/orderModel");

//This file contains all Logic for orderRoute

//post route for adding data to the database
async function postOrders(req, res) {
  try {
    let data = new orderModel(req.body);
    await data.save();
    res.json(await orderModel.find());
  } catch (error) {
    res.send(error);
  }
}

//post route for adding completed data to the database
async function postCompletedOrders(req, res) {
  try {
    let data = new orderModel(req.body);
    await data.save();
    res.json("Posted");
  } catch (error) {
    res.send(error);
  }
}

//get route for sending buyer orders to the frontend
async function getBuyOrders(req, res) {
  try {
    res.json(await orderModel.find({ type: "buyer" }));
  } catch (error) {
    res.send(error);
  }
}

//get route for sending seller orders to the frontend
async function getSellOrders(req, res) {
  try {
    res.json(await orderModel.find({ type: "seller" }));
  } catch (error) {
    res.send(error);
  }
}
//get route for sending completed orders to the frontend
async function getCompletedOrder(req, res) {
  try {
    res.json(await orderModel.find({ status: "completed" }));
  } catch (error) {
    res.send(error);
  }
}

//delete route for buyer order
async function deleteBuyOrders(req, res) {
  const { id } = req.params;
  try {
    await orderModel.findByIdAndDelete({ _id: id });
    res.status(201).send("Updated Successfully");
  } catch (error) {
    res.send(error);
  }
}

//delete route for seller order
async function deleteSellOrders(req, res) {
  const { id } = req.params;
  try {
    await orderModel.findByIdAndDelete({ _id: id });
    res.status(201).send("Updated Successfully");
  } catch (error) {
    res.send(error);
  }
}

//post route for modifying entire db
async function updateAll(req, res) {
  const updatedData = req.body;
  try {
    //remove data whose quantity becomes 0
    const removeOps = updatedData
      .filter(({ quantity }) => quantity === 0)
      .map(({ _id }) => ({
        deleteOne: {
          filter: { _id: _id },
        },
      }));

    //Setting updated quantity by filtering by _id
    const updateOps = updatedData.map(({ _id, quantity }) => ({
      updateOne: {
        filter: { _id: _id },
        update: {
          $set: { quantity: quantity },
        },
      },
    }));

    //bulkwrite method modifies entire db
    let updated = await orderModel.bulkWrite([...updateOps, ...removeOps]);
    res.json(updated);
  } catch (error) {
    res.send(error.message);
  }
}

//get route for all orders
const getAllOrders = async (req, res) => {
  try {
    res.json(await orderModel.find());
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  postOrders,
  getSellOrders,
  getBuyOrders,
  deleteBuyOrders,
  deleteSellOrders,
  getCompletedOrder,
  updateAll,
  postCompletedOrders,
  getAllOrders,
};
