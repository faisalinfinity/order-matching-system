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
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSellers } from "../redux/orderReducer/orderAction";
import { bs, bs_dark } from "../constants/constant";
import Loader from "./Loader";

const SellersTable = () => {
  const dispatch = useDispatch();
  const { seller, sellerLoading } = useSelector((s) => s.orderReducer);
  const { colorMode } = useColorMode();
  useEffect(() => {
    dispatch(getSellers());
  }, []);
  return (
    <Box
      borderRadius={"20px"}
      p="20px"
      w="30%"
      m="auto"
      boxShadow={colorMode === "dark" ? bs_dark : bs}
      mt="10px"
    >
      {" "}
      <Heading color={"red.600"} textAlign={"center"} fontSize={"md"}>
        Pending Sell Orders
      </Heading>
      {sellerLoading?<Loader />:<TableContainer className="container" overflowY={"scroll"}>
        <Table variant="striped" colorScheme="red">
          <Thead>
            <Tr>
              <Th>Seller Quantity</Th>
              <Th>Seller Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {seller?.reverse().map((el, i) => (
              <Tr key={i}>
                <Td>{el.quantity}</Td>
                <Td>₹{el.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>}
      
    </Box>
  );
};

export default SellersTable;
