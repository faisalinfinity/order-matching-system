import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { orderReducer } from "./orderReducer/orderReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ orderReducer });
//initializing redux store and applying redux-thunk for asynchronous action
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
