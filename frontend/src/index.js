import React from 'react';
import ReactDOM from 'react-dom';

import Sleek from './components/Sleek.js'

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import './index.css';


// const store = createStore(
//     reducer,
//     devToolsEnhancer()                          // This enables us use the Redux Dev-tools chrome extensions
// );

ReactDOM.render(
    <Sleek />,
    // <Provider store={store}>
    //
    // </Provider>,

    document.getElementById('root')
);
