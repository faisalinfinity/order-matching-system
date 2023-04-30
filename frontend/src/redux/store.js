import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { orderReducer } from "./orderReducer/orderReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ orderReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
