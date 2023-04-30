import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompletedOrder } from "../redux/orderReducer/orderAction";

const CompletedOrder = () => {
  const dispatch = useDispatch();
  const { completed, isLoading } = useSelector((s) => s.orderReducer);

  useEffect(() => {
    dispatch(getCompletedOrder());
  }, []);
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Quantity</Th>
            <Th> Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {completed?.map((el, i) => (
            <Tr key={i}>
              <Td>{el.quantity}</Td>
              <Td>{el.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CompletedOrder;
