import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk, logger))
);

export default store;
