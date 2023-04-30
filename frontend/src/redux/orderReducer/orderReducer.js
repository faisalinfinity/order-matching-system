import {
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

const initialState = {
  buyer: [],
  seller: [],
  completed: [],
  isLoading: false,
  isError: false,
};

export const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_BUYER: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_SELLER: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_SELLER_SUCCESS: {
      return {
        ...state,
        seller: payload,
        isLoading: false,
        isError: false,
      };
    }
    case GET_BUYER_SUCCESS: {
      return {
        ...state,
        buyer: payload,
        isLoading: false,
        isError: false,
      };
    }
    case GET_SELLER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_BUYER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_COMPLETED: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_COMPLETED_SUCCESS: {
      return {
        ...state,
        completed: payload,
        isError: false,
      };
    }
    case GET_COMPLETED_ERROR: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    default: {
      return state;
    }
  }
};
