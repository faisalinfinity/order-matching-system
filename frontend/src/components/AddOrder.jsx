import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  useColorMode,
  useColorModeValue,
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

//Conponent for Adding order to the db
const AddOrder = () => {
  //Intializing the formData object
  const [formData, setFormData] = useState({
    quantity: 0,
    price: 0,
    status: "pending",
    type: "",
  });

  //Hook for conditional css based on dark/light mode
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();

  //importing buyer/seller from redux store
  const { buyer, seller, isLoading } = useSelector((s) => s.orderReducer);

  //initializing audio file
  const [audio] = useState(new Audio(apple));
  //for alert message
  const toast = useToast();

  //This fn is responsible for handle added formData
  const handlePost = () => {
    if (formData.quantity != 0 && formData.price != 0 && formData.type != "") {
      //storing initial Qty in initialQty
      let initialQty = formData.quantity;

      //checking if the added the is the buy order
      if (formData.type == "buyer") {
        //checkSeller fn is responsible for checking matching order in existing seller data []
        //passing all reqd parameters
        checkSeller(
          dispatch,
          seller,
          formData,
          initialQty,
          postOrder,
          postCompletedOrder,
          updateAll,
          audio,
          toast
        );
      } else {
        // if the added the is the Sell order

        //checkBuyer fn is responsible for checking matching order in existing buyer data []
        //passing all reqd parameters
        checkBuyer(
          dispatch,
          buyer,
          formData,
          initialQty,
          postOrder,
          postCompletedOrder,
          updateAll,
          audio,
          toast
        );
      }
    } else {
      //alert for empty formData
      toast({
        title: "Fill all Details first",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box
      //Inline Styling using Chakra-UI
      borderRadius={"20px"}
      bg={useColorModeValue("#6c4d35", "black")}
      p="20px"
      w="350px"
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
