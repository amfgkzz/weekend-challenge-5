import React, { Component } from "react";
import ShowStatus from '../ShowStatus/ShowStatus';
import { connect } from 'react-redux';

class ThirdPage extends Component {

    state = {
        support: ''
    }

    // function that runs on button click
    handleClick = (event) => {
        // function that prevents page from refreshing
        event.preventDefault();
        // will set state to whatever is in the input
        this.setState({
            support: this.state.support,
            // run a function AFTER setting state
        }, () => {
            // check to see if input is blank, if blank alert user
            if (this.state.support === '') {
                alert('AM I SUPPORTING YOU OR NOT?');
            }
            // if input isn't blank, dispatch to reduxState and send state object
            else {
                this.props.dispatch({
                    type: 'BUTTON_CLICKED',
                    support: this.state.support,
                });
                // after dispatch, move user on to fourth page
                this.props.history.push('/fourth');
            }
        });
    }

    // function that takes in value of input
    handleInput = (event) => {
        this.setState({
            support: event.target.value,
        });
    }

    render() {

        return (
            <>
                <header style={{ textAlign: 'center' }}>

                    <h1>HOW WELL ARE YOU BEING SUPPORTED?</h1>

                </header>

                <form style={{ display: 'flex', justifyContent: 'center' }} onSubmit={this.handleClick}>

                    <input type="number" min="1" max="10" style={{ width: 209 }} value={this.state.support} onChange={this.handleInput} placeholder="Rate your support between 1 to 10!" />

                    <button>Next</button>

                </form>

                <ShowStatus history={this.props.history} />

            </>
        )
    }
}

export default connect()(ThirdPage);