import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const feedbackReducer = (state = [], action) => {
    if (action.type === 'BUTTON_CLICKED') {
        console.log(action);
        console.log(state);
        delete action.type;
        return [...state, action];
    }
    else if (action.type === 'CLEAR_FEEDBACK') {
        return [];
    }
    return state;
}

const reviewReducer = (state = true, action) => {
    if (action.type === 'GO_TO_REVIEW') {
        console.log(state);
        console.log(action.payload);
        return action.payload;
    }
    else if (action.type === 'NEW_FEEDBACK') {
        return action.payload;
    }
    return state;
}

const storeMe = createStore(
    combineReducers({
        feedbackReducer,
        reviewReducer,
    })
);

ReactDOM.render(<Provider store={storeMe}><App /></Provider>, document.getElementById('root'));

