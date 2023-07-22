// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React, { Component } from "react";
import { AppRegistry } from "react-native";

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";

import allReducers from "./reducers";
import MovieContainer from './containers/MovieContainer';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const App = () => {
    return (
        <Provider store={store}>
            <MovieContainer />
        </Provider>
    );
}
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => App)