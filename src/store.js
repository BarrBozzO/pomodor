import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import logger from 'redux-logger';
import throttle from 'lodash/throttle';
import rootReducer from "./reducers/index";
import {loadState, saveState} from './utils/localStorage';

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(reduxThunk, logger))
);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

export default store;
