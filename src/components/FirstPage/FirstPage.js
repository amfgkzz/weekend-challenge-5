import React, { Component } from "react";
import ShowStatus from '../ShowStatus/ShowStatus';
import { connect } from 'react-redux';

class FirstPage extends Component {

    state = {
        feeling: ''
    }

    // function that runs on button click
    handleClick = (event) => {
        // function that prevents page from refreshing
        event.preventDefault();
        // will set state to whatever is in the input
        this.setState({
            feeling: this.state.feeling,
            // run a function AFTER setting state
        }, () => {
            // check to see if input is blank, if blank alert user
            if (this.state.feeling === '') {
                alert('YOU ARE REQUIRED TO TELL ME HOW YOU ARE FEELING OR ELSE!');
            }
            // if input isn't blank, dispatch to reduxState and send state object
            else {
                this.props.dispatch({
                    type: 'BUTTON_CLICKED',
                    feeling: this.state.feeling,
                });
                // after dispatch, move user on to second page
                this.props.history.push('/second');
            }
        });
    }

    // function that takes in value of input
    handleInput = (event) => {
        this.setState({
            feeling: event.target.value,
        });
    }

    render() {

        return (
            <>
                <header style={{ textAlign: 'center' }}>

                    <h1>HOW ARE YOU FEELING TODAY?</h1>

                </header>

                <form style={{ display: 'flex', justifyContent: 'center' }} onSubmit={this.handleClick}>

                    <input type="number" min="1" max="10" style={{ width: 209 }} value={this.state.feeling} onChange={this.handleInput} placeholder="Rate your feeling between 1 to 10!" />

                    <button>Next</button>

                </form>

                <ShowStatus history={this.props.history} />

            </>
        )
    }
}

export default connect()(FirstPage);