import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Sagas';
import rootReducer from '../Reducers';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}) => {
  const middlewares = [
    sagaMiddleware,
  ];
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  )
  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
