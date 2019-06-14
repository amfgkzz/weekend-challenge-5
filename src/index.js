import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const feelingsReducer = (state = [], action) => {
    if (action.type === 'FEELINGS_BUTTON_CLICKED') {
        return [...state, action.payload];
    }
    return state;
}

const storeMe = createStore(
    combineReducers({
        feelingsReducer,
    })
);

ReactDOM.render(<Provider store={storeMe}><App /></Provider>, document.getElementById('root'));

