import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// this variable is a function that has state as an empty array
// until the user stores their inputs(which are objects) in here
const feedbackReducer = (state = [], action) => {
    // this is where state stores objects after the user hits the button_clicked button
    if (action.type === 'BUTTON_CLICKED') {
        delete action.type;
        return [...state, action];
    }
    // this is where the state goes back to an empty array, after the user hits the clear_feedback button
    else if (action.type === 'CLEAR_FEEDBACK') {
        return [];
    }
    return state;
}

// this function will determine what page to render
const reviewReducer = (state = true, action) => {
    // this will render the 'thank you' page, after the user submits the feedback
    if (action.type === 'GO_TO_REVIEW') {
        return action.payload;
    }
    // this will render the 'new feedback page' after the user hits the leave a new feedback button
    else if (action.type === 'NEW_FEEDBACK') {
        return action.payload;
    }
    return state;
}

// this is where all the reducers are stored
const storeMe = createStore(
    combineReducers({
        feedbackReducer,
        reviewReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeMe}><App /></Provider>, document.getElementById('root'));

