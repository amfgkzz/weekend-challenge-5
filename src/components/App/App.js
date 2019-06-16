import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FirstPage from '../FirstPage/FirstPage';
import SecondPage from '../SecondPage/SecondPage';
import ThirdPage from '../ThirdPage/ThirdPage';
import FourthPage from '../FourthPage/FourthPage';
import ShowStatus from '../ShowStatus/ShowStatus';
import ReviewPage from '../ReviewPage/ReviewPage';

// NOTE TO SELF, CAN CREATE ONE CLICK AND ONE INPUT FUNCTION THAT CAN BE PASSED DOWN TO ALL MY COMPONENTS
// DO THIS AFTER MAKING SURE IT ALL WORKS FIRST

class App extends Component {
  render() {
    let show = this.props.reduxState.reviewReducer;
    if (show) {
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

        </Router>
      )
    } else {
      return (
        <Router>
          <Route exact path="/" component={ReviewPage} />
        </Router>
      )
    }
  }
}

const mapReduxToState = (reduxState) => ({
  reduxState: reduxState,
});

export default connect(mapReduxToState)(App);
