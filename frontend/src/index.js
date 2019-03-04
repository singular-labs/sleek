import React from 'react';
import ReactDOM from 'react-dom';

import {applyMiddleware, createStore} from 'redux'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import Sleek from './container'
import {rootSaga} from "./sagas";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);


ReactDOM.render(
    <Provider store={store}>
        <Sleek/>
    </Provider>,

    document.getElementById('root')
);

