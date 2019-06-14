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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
      </div>
      {/* FIX: To test the pages from DOM */}
      <Link to="/">Test First Page</Link>
      <br/>
      <Link to="/second">Test Second Page</Link>
      <br/>
      <Link to="/third">Test Third Page</Link>
      <br/>
      <Link to="/fourth">Test Fourth Page</Link>

      <Route exact path="/" component={FirstPage}/>
      <Route exact path="/second" component={SecondPage}/>
      <Route exact path="/third" component={ThirdPage}/>
      <Route exact path="/fourth" component={FourthPage}/>
      </Router>
    );
  }
}

export default App;
