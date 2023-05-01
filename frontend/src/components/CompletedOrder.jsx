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
//This component is the Table to show all completed order
const CompletedOrder = () => {

    //useDispatch Hook for dispatching action for updating redux Store
  const dispatch = useDispatch();
    //importing completed[] data from redux Store
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
      bg={useColorModeValue("white", "black")}
    >
      <Heading color={"blue.500"} textAlign={"center"} fontSize={"md"}>
        Completed Orders - {completed.length}
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
              {/* mapping all completed's order */}
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
