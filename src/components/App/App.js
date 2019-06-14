import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FirstPage from '../FirstPage/FirstPage';
import SecondPage from '../SecondPage/SecondPage';
import ThirdPage from '../ThirdPage/ThirdPage';
import FourthPage from '../FourthPage/FourthPage';

class App extends Component {
  render() {
    return (
      <Router>

        {/* Header that will show on every page */}
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
        </div>

        {/* FIX: To test the pages from DOM */}
        <Link to="/">Test First Page</Link>
        <br />
        <Link to="/second">Test Second Page</Link>
        <br />
        <Link to="/third">Test Third Page</Link>
        <br />
        <Link to="/fourth">Test Fourth Page</Link>
        <br />

        {/* Route Paths to hit different pages */}
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/second" component={SecondPage} />
        <Route exact path="/third" component={ThirdPage} />
        <Route exact path="/fourth" component={FourthPage} />

        {/* Review Feedback to show on lower part of page */}
        <div className="App">
          <header className="review-feedback-header">
            <h1>Review Your Feedback!</h1>
            <ul style={{ listStyleType: 'none' }}>

              <li>Feelings: </li>
              <li>Understanding: </li>
              <li>Support: </li>
              <li>Comments: </li>

            </ul>
          </header>
        </div>

      </Router>
    );
  }
}

export default App;
