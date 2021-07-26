import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Router from './routes';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import FlashMessage from "react-native-flash-message";

import rootReducer from './store/reducers';

const composeEnhancers = compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));


const ProductsApp = prop => (
    <Provider store={store}>
        <StatusBar style="#6ca2f7" />
        <Router />
        <FlashMessage position="top" style={{alignItems: 'center', justifyContent: 'center', fontSize: 16}} />
    </Provider>
);

export default ProductsApp;