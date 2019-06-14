import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const storeMe = createStore(()=>{
    console.log('hi');
})

ReactDOM.render(<Provider store={storeMe}><App /></Provider>, document.getElementById('root'));

