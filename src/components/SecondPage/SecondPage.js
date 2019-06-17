import React, { Component } from "react";
import ShowStatus from '../ShowStatus/ShowStatus';
import { connect } from 'react-redux';

class SecondPage extends Component {

    state = {
        understanding: ''
    }

    // function that runs on button click
    handleClick = (event) => {
        // function that prevents page from refreshing
        event.preventDefault();
        // will set state to whatever is in the input
        this.setState({
            understanding: this.state.understanding,
            // run a function AFTER setting state
        }, () => {
            // check to see if input is blank, if blank alert user
            if (this.state.understanding === '') {
                alert('TELL ME HOW WELL YOU ARE UNDERSTANDING OR ELSE!');
            }
            // if input isn't blank, dispatch to reduxState and send state object
            else {
                this.props.dispatch({
                    type: 'BUTTON_CLICKED',
                    understanding: this.state.understanding,
                });
                // after dispatch, move user on to third page
                this.props.history.push('/third');
            }
        });
    }

    // function that takes in value of input
    handleInput = (event) => {
        this.setState({
            understanding: event.target.value,
        });
    }

    render() {

        return (
            <>
                <header style={{ textAlign: 'center' }}>

                    <h1>HOW WELL ARE YOU UNDERSTANDING THE CONCEPTS?</h1>

                </header>

                <form style={{ display: 'flex', justifyContent: 'center' }} onSubmit={this.handleClick}>

                    <input type="number" min="1" max="10" style={{ width: 209 }} value={this.state.understanding} onChange={this.handleInput} placeholder="Rate your understanding from 1 to 10!" />

                    <button>Next</button>

                </form>

                <ShowStatus history={this.props.history} />

            </>
        )
    }
}

export default connect()(SecondPage);