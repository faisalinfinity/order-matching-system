import { Box, Input, Select } from "@chakra-ui/react";
import React from "react";
import { bs } from "../constants/constant";

const AddOrder = () => {
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
      <Input placeholder="Quantity"></Input>
      <Input placeholder="Price"></Input>
      <Select>
        <option value="option1">Type</option>
        <option value="buyer">Buy</option>
        <option value="seller">Sell</option>
      </Select>
    </Box>
  );
};

export default AddOrder;
