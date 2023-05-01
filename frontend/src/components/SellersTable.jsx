import {
  Box,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSellers } from "../redux/orderReducer/orderAction";
import { bs, bs_dark } from "../constants/constant";
import Loader from "./Loader";

//This component is the Table to show all seller's order
const SellersTable = () => {
    //useDispatch Hook for dispatching action for updating redux Store
  const dispatch = useDispatch();

    //importing buyer[] data from redux Store
  const { seller, sellerLoading } = useSelector((s) => s.orderReducer);

  //for Dark Mode
  const { colorMode } = useColorMode();
  useEffect(() => {
    dispatch(getSellers());
  }, []);
  return (
    <Box
      bg={useColorModeValue("teal.100", "black")}
      borderRadius={"20px"}
      p="20px"
      m="auto"
      boxShadow={colorMode === "dark" ? bs_dark : bs}
      mt="10px"
      minW="30%"
    >
      {" "}
      <Heading color={"red.600"} textAlign={"center"} fontSize={"md"}>
        Pending Sell Orders - {seller.length}
      </Heading>
      {sellerLoading ? (
        <Loader />
      ) : (
        <TableContainer
          maxHeight={"400px"}
          minHeight={"400px"}
          className="container"
          overflowY={"scroll"}
        >
          <Table variant="striped" colorScheme="red">
            <Thead>
              <Tr>
                <Th>Seller Quantity</Th>
                <Th>Seller Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* mapping all seller's order */}
              {seller?.reverse().map((el, i) => (
                <Tr key={i}>
                  <Td>{el.quantity}</Td>
                  <Td>₹{el.price}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default SellersTable;
