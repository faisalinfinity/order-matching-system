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
import { getBuyers } from "../redux/orderReducer/orderAction";

const BuyersTable = () => {
  const dispatch = useDispatch();
  const { buyer, isLoading } = useSelector((s) => s.orderReducer);

  useEffect(() => {
    dispatch(getBuyers());
  }, []);
  return (
    <TableContainer >
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Buyer Quantity</Th>
            <Th>Buyer Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {buyer?.map((el,i) => (
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

export default BuyersTable;
