import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import reducers from "./Reducers/index";
import { compose } from "redux";
import rootSaga from "./Saga/rootSaga";



// const store = compose(
//   applyMiddleware(...middleware),
//   window.__REDUX_DEVTOOLS_EXTENSION__
//   ? window.__REDUX_DEVTOOLS_EXTENSION__()
//   : f => f
//   // window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION()
// )(createStore)(reducer);
const configStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  let composeEnhancer = 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  let store = createStore(reducers,
    initialState,
    composeEnhancer(applyMiddleware(...middleware)));
  sagaMiddleware.run(rootSaga);
  return store;
}
export default configStore;