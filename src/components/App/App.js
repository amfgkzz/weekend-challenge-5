import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import FirstPage from '../FirstPage/FirstPage';
import SecondPage from '../SecondPage/SecondPage';
import ThirdPage from '../ThirdPage/ThirdPage';
import FourthPage from '../FourthPage/FourthPage';
import ReviewPage from '../ReviewPage/ReviewPage';

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

          {/* Route Paths to hit different pages */}
          <Route exact path="/" component={FirstPage} />
          <Route exact path="/second" component={SecondPage} />
          <Route exact path="/third" component={ThirdPage} />
          <Route exact path="/fourth" component={FourthPage} />

        </Router>
      )
    } else {
      return (

        // Show this page when sending the feedback to database*
        <ReviewPage />
      )
    }
  }
}

const mapReduxToState = (reduxState) => ({
  reduxState: reduxState,
});

export default connect(mapReduxToState)(App);
