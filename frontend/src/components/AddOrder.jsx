import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  useColorMode,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { bs, bs_dark } from "../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  postCompletedOrder,
  postOrder,
  updateAll,
} from "../redux/orderReducer/orderAction";
import { checkBuyer, checkSeller } from "../scripts/scripts";
import { useToast } from "@chakra-ui/react";
const apple = require("../assets/apple.mp3");

const AddOrder = () => {
  const [formData, setFormData] = useState({
    quantity: 0,
    price: 0,
    status: "pending",
    type: "",
  });

  const { colorMode } = useColorMode();

  const dispatch = useDispatch();
  const { buyer, seller, isLoading, completed } = useSelector(
    (s) => s.orderReducer
  );
  const [audio] = useState(new Audio(apple));
  const toast = useToast();

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
          updateAll,
          audio
        );
      } else {
        checkBuyer(
          dispatch,
          buyer,
          formData,
          initialQty,
          postOrder,
          postCompletedOrder,
          updateAll,
          audio
        );
      }
    } else {
      toast({
        title: 'Fill all Details first',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position:"top"
      })
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
      <Heading fontSize={"18px"} color={"#ffa91b"} textAlign={"center"}>
        Enter order details
      </Heading>
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
        colorScheme="white"
        variant="outline"
        spinnerPlacement="end"
        bgColor={"teal"}
        color={"white"}
        onClick={handlePost}
        borderRadius={"15px"}
      >
        Submit
      </Button>
    </Box>
  );
};

export default AddOrder;
