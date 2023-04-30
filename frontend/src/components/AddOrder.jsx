import { Box, Button, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { bs } from "../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../redux/orderReducer/orderAction";

const AddOrder = () => {
  const [formData, setFormData] = useState({
    quantity: 0,
    price: 0,
    status: "pending",
    type: "",
  });

  const dispatch = useDispatch();
  const {buyer,seller}=useSelector((s)=>s.orderReducer)

  const handlePost = () => {
    if (formData.quantity != 0 && formData.price != 0 && formData.type != "") {

      if(formData.type=="buyer"){
        seller.map((el)=>{
         
        })
      }

      dispatch(postOrder(formData));
    } else {
      alert("Fill all details first");
    }
  };
  return (
    <Box
      borderRadius={"20px"}
      p="20px"
      w="30%"
      m="auto"
      boxShadow={bs}
      mt="10px"
      display={"flex"}
      flexDirection={"column"}
      gap={"10px"}
    >
      <Input
        onChange={(e) =>
          setFormData({ ...formData, quantity: +e.target.value })
        }
        placeholder="Quantity"
      ></Input>
      <Input
        onChange={(e) => setFormData({ ...formData, price: +e.target.value })}
        placeholder="Price"
      ></Input>
      <Select
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
      >
        <option value="">Type</option>
        <option value="buyer">Buy</option>
        <option value="seller">Sell</option>
      </Select>
      <Button onClick={handlePost}>Submit</Button>
    </Box>
  );
};

export default AddOrder;
