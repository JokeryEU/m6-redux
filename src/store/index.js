import { createStore, combineReducers } from "redux";
import { mainReducer } from "../reducers";

export const initialState = {
  count: 0,
};

const rootReducer = combineReducers({});

const configureStore = () =>
  createStore(
    mainReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default configureStore;
