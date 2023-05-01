import { BASE_URL } from "../../constants/constant";
import axios from "axios";
import {
  GET_ALL_ORDER,
  GET_ALL_ORDER_ERROR,
  GET_ALL_ORDER_SUCCESS,
  GET_BUYER,
  GET_BUYER_ERROR,
  GET_BUYER_SUCCESS,
  GET_COMPLETED,
  GET_COMPLETED_ERROR,
  GET_COMPLETED_SUCCESS,
  GET_SELLER,
  GET_SELLER_ERROR,
  GET_SELLER_SUCCESS,
} from "./orderType";

//This fn is for making post request for getting all the orders
export const getAllOrders = () => (dispatch) => {
  //dispatching action for loader
  dispatch({ type: GET_ALL_ORDER });
  return axios
    .get(`${BASE_URL}/orders`)
    .then((res) => {
      //dispatching action for saving res data in the redux
      dispatch({ type: GET_ALL_ORDER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      // //dispatching action for Error
      dispatch({ type: GET_ALL_ORDER_ERROR });
    });
};

//This fn is for making post request for getting all the buyer's orders
export const getBuyers = () => (dispatch) => {
  //dispatching action for loader
  dispatch({ type: GET_BUYER });
  return axios
    .get(`${BASE_URL}/orders/buyer`)
    .then((res) => {
      //dispatching action for saving res data in the redux
      return dispatch({
        type: GET_BUYER_SUCCESS,
        payload: res.data,
      });
    }) // //dispatching action for Error
    .catch((err) => dispatch({ type: GET_BUYER_ERROR }));
};

//This fn is for making post request for getting all the seller's orders
export const getSellers = () => (dispatch) => {
  //dispatching action for loader
  dispatch({ type: GET_SELLER });
  return axios
    .get(`${BASE_URL}/orders/seller`)
    .then((res) => {
      //dispatching action for saving res data in the redux
      return dispatch({
        type: GET_SELLER_SUCCESS,
        payload: res.data,
      });
    }) //dispatching action for Error

    .catch((err) => dispatch({ type: GET_SELLER_ERROR }));
};

//api req for posting formData
export const postOrder = (formData) => (dispatch) => {
  return axios.post(`${BASE_URL}/orders`, formData);
};

//get req for getting completed order whose order status are completed
export const getCompletedOrder = () => (dispatch) => {
  dispatch({ type: GET_COMPLETED });
  return axios
    .get(`${BASE_URL}/orders/completed`)
    .then((res) => {
      //dispatching action for saving res data in the redux
      dispatch({ type: GET_COMPLETED_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_COMPLETED_ERROR }));
};

//Post req for modifying whole db
export const updateAll = (data) => (dispatch) => {
  return axios.post(`${BASE_URL}/orders/updateall`, data).then(() => {
    dispatch(getAllOrders());
  });
};

//posting completed order
export const postCompletedOrder = (formData) => (dispatch) => {
  return axios.post(`${BASE_URL}/orders/completed`, formData);
};
