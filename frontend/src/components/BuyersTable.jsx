import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBuyers } from "../redux/orderReducer/orderAction";
import { bs, bs_dark } from "../constants/constant";
import Loader from "./Loader";

//This component is the Table to show all buyer's order
const BuyersTable = () => {
  //useDispatch Hook for dispatching action for updating redux Store
  const dispatch = useDispatch();

  //importing buyer[] data from redux Store
  const { buyer, buyerLoading } = useSelector((s) => s.orderReducer);
  const { colorMode } = useColorMode();
  console.log(buyer)
  useEffect(() => {
    dispatch(getBuyers());
  }, []);
  return (
    <Box
      borderRadius={"20px"}
      bg={useColorModeValue("whatsapp.100", "black")}
      p="20px"
      minW="30%"
      m="auto"
      boxShadow={colorMode === "dark" ? bs_dark : bs}
      mt="10px"
      gap={"10px"}
    >
      {" "}
      <Heading color={"green.500"} textAlign={"center"} fontSize={"md"}>
        Pending Buy Orders -{buyer.length}
      </Heading>
      {buyerLoading ? (
        <Loader />
      ) : (
        <TableContainer
          maxHeight={"400px"}
          minHeight={"400px"}
          className="container"
          overflowY={"scroll"}
        >
          <Table variant="striped" colorScheme="green">
            <Thead>
              <Tr>
                <Th>Buyer Quantity</Th>
                <Th>Buyer Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* mapping all buyer's order */}
              {buyer?.reverse().map((el, i) => (
                <Tr key={i}>
                  <Td>{el.quantity}</Td>
                  <Td>₹ {el.price}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default BuyersTable;
