const { buyerModel } = require("../model/orderModel")

async function postOrders(req,res){

try {
    let data=new buyerModel(req.body)
    await data.save()
    res.json(buyerModel.find())
} catch (error) {
    res.send(error)
}

}
module.exports={
    postOrders
}