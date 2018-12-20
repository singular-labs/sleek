import React from 'react';
import ReactDOM from 'react-dom';

import reducer from './reducer'
import Sleek from './container'

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import './index.css';


const store = createStore(
    reducer,
    devToolsEnhancer()                          // This enables us use the Redux Dev-tools chrome extensions
);

ReactDOM.render(
    <Provider store={store}>
        <Sleek/>
    </Provider>,

    document.getElementById('root')
);

