// import { createStore } from "redux";//01
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./rootReducer";
import productSaga from './productSaga';
import createSagaMiddleware from 'redux-saga';

// const store = createStore(rootReducer);//01
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(productSaga);
export default store;

// ()=>{} this is like a call ack function 