import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import throttle from "lodash/throttle";
import rootReducer from "./reducers/index";
import timerMiddleware from "./middlewares/timerMiddleware";
import { initTimer } from "./actions/pomodor";
import { loadState, saveState } from "../utils/localStorage";

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(reduxThunk, logger, timerMiddleware))
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

store.dispatch(initTimer());

export default store;
