import { Box, Button, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { bs } from "../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  postCompletedOrder,
  postOrder,
  updateAll,
} from "../redux/orderReducer/orderAction";

const AddOrder = () => {
  const [formData, setFormData] = useState({
    quantity: 0,
    price: 0,
    status: "pending",
    type: "",
  });

  const dispatch = useDispatch();
  const { buyer, seller } = useSelector((s) => s.orderReducer);

  const handlePost = () => {
    if (formData.quantity != 0 && formData.price != 0 && formData.type != "") {
      let initialQty = formData.quantity;
      if (formData.type == "buyer") {
        let sortedSeller = seller.sort((b, a) => a.price - b.price);
        let updatedSeller = sortedSeller.map((el) => {
          if (el.price <= formData.price) {
            if (el.quantity >= initialQty) {
              let temp = initialQty;
              initialQty = 0;
              return {
                ...el,
                quantity: el.quantity - temp,
              };
            } else {
              initialQty = initialQty - el.quantity;
              return {
                ...el,
                quantity: 0,
              };
            }
          }

          return el;
        });

        if (initialQty > 0) {
          dispatch(
            postOrder({
              quantity: initialQty,
              price: formData.price,
              status: "pending",
              type: formData.type,
            })
          )
            .then(() => {
              let temp = formData.quantity - initialQty;
              if (temp > 0) {
                dispatch(
                  postCompletedOrder({
                    quantity: temp,
                    price: formData.price,
                    status: "completed",
                    type: "completed",
                  })
                );
              }
            })
            .then(() => {
              dispatch(updateAll(updatedSeller));
            });
        } else {
          let temp = formData.quantity - initialQty;
          if (temp > 0) {
            dispatch(
              postCompletedOrder({
                quantity: temp,
                price: formData.price,
                status: "completed",
                type: "completed",
              })
            ).then(() => {
              dispatch(updateAll(updatedSeller));
            });
          } else {
            dispatch(updateAll(updatedSeller));
          }
        }
      } else {
        let sortedBuyer = buyer.sort((a, b) => a.price - b.price);
        let updatedBuyer = sortedBuyer.map((el) => {
          if (el.price >= formData.price) {
            if (el.quantity >= initialQty) {
              let temp = initialQty;
              initialQty = 0;
              return {
                ...el,
                quantity: el.quantity - temp,
              };
            } else {
              initialQty = initialQty - el.quantity;
              return {
                ...el,
                quantity: 0,
              };
            }
          }

          return el;
        });

        if (initialQty > 0) {
          dispatch(
            postOrder({
              quantity: initialQty,
              price: formData.price,
              status: "pending",
              type: formData.type,
            })
          )
            .then(() => {
              let temp = formData.quantity - initialQty;
              if (temp > 0) {
                dispatch(
                  postCompletedOrder({
                    quantity: temp,
                    price: formData.price,
                    status: "completed",
                    type: "completed",
                  })
                );
              }
            })
            .then(() => {
              dispatch(updateAll(updatedBuyer));
            });
        } else {
          let temp = formData.quantity - initialQty;

          if (temp > 0) {
            dispatch(
              postCompletedOrder({
                quantity: temp,
                price: formData.price,
                status: "completed",
                type: "completed  ",
              })
            ).then(() => {
              dispatch(updateAll(updatedBuyer));
            });
          } else {
            dispatch(updateAll(updatedBuyer));
          }
        }
      }
    } else {
      alert("Fill all details first");
    }
  };
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
      <Button onClick={handlePost}>Submit</Button>
    </Box>
  );
};

export default AddOrder;
