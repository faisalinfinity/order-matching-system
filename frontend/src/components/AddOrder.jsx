import { Box, Button, Input, Select, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
import { bs, bs_dark } from "../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  postCompletedOrder,
  postOrder,
  updateAll,
} from "../redux/orderReducer/orderAction";
import { checkBuyer, checkSeller } from "../scripts/scripts";

const AddOrder = () => {
  const [formData, setFormData] = useState({
    quantity: 0,
    price: 0,
    status: "pending",
    type: "",
  });

  const { colorMode } = useColorMode();

  const dispatch = useDispatch();
  const { buyer, seller, isLoading } = useSelector((s) => s.orderReducer);

  const handlePost = () => {
    if (formData.quantity != 0 && formData.price != 0 && formData.type != "") {
      let initialQty = formData.quantity;
      if (formData.type == "buyer") {
        checkSeller(
          dispatch,
          seller,
          formData,
          initialQty,
          postOrder,
          postCompletedOrder,
          updateAll
        );
      } else {
        checkBuyer(
          dispatch,
          buyer,
          formData,
          initialQty,
          postOrder,
          postCompletedOrder,
          updateAll
        );
      }
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
      boxShadow={colorMode === "dark" ? bs_dark : bs}
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
      <Button
        isLoading={isLoading}
        loadingText="Loading"
        colorScheme="teal"
        variant="outline"
        spinnerPlacement="end"
        onClick={handlePost}
      >
        Submit
      </Button>
    </Box>
  );
};

export default AddOrder;
