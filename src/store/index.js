import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import routesReducer from "../reducers/routes";
import searchingRouteReducer from "../reducers/searchingRoute";


const reducer = combineReducers({
  routes: routesReducer,
  searchingRoute: searchingRouteReducer   

});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default store;
