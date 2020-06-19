import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

import invoicesReducer from "./invoicesReducer";
import customersReducer from "./customersReducer";
import productsReducer from "./productsReducer";
import historyReducer from "./historyReducer";

let reducers = combineReducers({
  invoices: invoicesReducer,
  customers: customersReducer,
  products: productsReducer,
  history: historyReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware, logger))
);

export default store;
