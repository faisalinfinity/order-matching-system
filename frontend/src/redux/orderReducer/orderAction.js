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

export const getAllOrders = () => (dispatch) => {
  dispatch({ type: GET_ALL_ORDER });
  return axios
    .get(`${BASE_URL}/orders`)
    .then((res) => {
      dispatch({ type: GET_ALL_ORDER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_ALL_ORDER_ERROR });
    });
};

export const getBuyers = () => (dispatch) => {
  dispatch({ type: GET_BUYER });
  return axios
    .get(`${BASE_URL}/orders/buyer`)
    .then((res) => {
      return dispatch({
        type: GET_BUYER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch({ type: GET_BUYER_ERROR }));
};

export const getSellers = () => (dispatch) => {
  dispatch({ type: GET_SELLER });
  return axios
    .get(`${BASE_URL}/orders/seller`)
    .then((res) => {
      return dispatch({
        type: GET_SELLER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch({ type: GET_SELLER_ERROR }));
};

export const updateSeller = (id, changes) => (dispatch) => {
  return axios
    .patch(`${BASE_URL}/orders/seller/${id}`, changes)
    .then((res) => {
      getSellers();
    })
    .catch((err) => dispatch({ type: GET_SELLER_ERROR }));
};

export const updateBuyer = (id, changes) => (dispatch) => {
  return axios
    .patch(`${BASE_URL}/orders/buyer/${id}`, changes)
    .then((res) => {
      getBuyers();
    })
    .catch((err) => dispatch({ type: GET_SELLER_ERROR }));
};

export const postOrder = (formData) => (dispatch) => {
  return axios.post(`${BASE_URL}/orders`, formData)
};

export const getCompletedOrder = () => (dispatch) => {
  dispatch({ type: GET_COMPLETED });
  return axios
    .get(`${BASE_URL}/orders/completed`)
    .then((res) => {
      dispatch({ type: GET_COMPLETED_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_COMPLETED_ERROR }));
};

export const updateAll = (data) => (dispatch) => {
  return axios.post(`${BASE_URL}/orders/updateall`, data).then(() => {
    dispatch(getAllOrders());
  });
};
export const postCompletedOrder = (formData) => (dispatch) => {
  return axios.post(`${BASE_URL}/orders/completed`, formData)
};
