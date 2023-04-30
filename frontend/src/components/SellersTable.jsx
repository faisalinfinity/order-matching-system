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
import { getSellers } from "../redux/orderReducer/orderAction";


const SellersTable = () => {
    const dispatch = useDispatch();
    const { seller, isLoading } = useSelector((s) => s.orderReducer);
  
    useEffect(() => {
      dispatch(getSellers());
    }, []);
    return (
      <TableContainer >
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Seller Quantity</Th>
              <Th>Seller Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {seller?.map((el,i) => (
              <Tr key={i}>
                <Td>{el.quantity}</Td>
                <Td>{el.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
}

export default SellersTable