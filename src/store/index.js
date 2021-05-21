import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import favReducer from "../reducers/index";
import jobReducer from "../reducers/jobs";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  favourites: {
    favoriteList: [],
  },

  jobs: {
    jobList: [],
    error: false,
    loading: false,
  },
};

const rootReducer = combineReducers({
  jobs: jobReducer,
  favourites: favReducer,
});

const configureStore = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default configureStore;
