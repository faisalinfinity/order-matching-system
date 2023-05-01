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
import { getCompletedOrder } from "../redux/orderReducer/orderAction";
import { bs, bs_dark } from "../constants/constant";
import Loader from "./Loader";

const CompletedOrder = () => {
  const dispatch = useDispatch();
  const { completed, completedLoading } = useSelector((s) => s.orderReducer);
  const { colorMode } = useColorMode();

  useEffect(() => {
    dispatch(getCompletedOrder());
  }, []);
  return (
    <Box
      borderRadius={"20px"}
      p="20px"
      m="auto"
      boxShadow={colorMode === "dark" ? bs_dark : bs}
      mt="10px"
      gap={"10px"}
      minW="30%"
      bg={useColorModeValue("white","black")}
    >
      <Heading color={"blue.500"} textAlign={"center"} fontSize={"md"}>
        Completed Orders
      </Heading>
      {completedLoading ? (
        <Loader />
      ) : (
        <TableContainer
          className="container"
          maxHeight={"400px"}
          overflowY={"scroll"}
        >
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th>Executed Quantity</Th>
                <Th>At Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {completed?.reverse().map((el, i) => (
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

export default CompletedOrder;
