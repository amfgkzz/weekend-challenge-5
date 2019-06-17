import React, { Component } from "react";
import ShowStatus from '../ShowStatus/ShowStatus';
import { connect } from 'react-redux';

class FourthPage extends Component {

    state = {
        comments: '',
    }

    // function that runs on button click
    handleClick = (event) => {
        // function that prevents page from refreshing
        event.preventDefault();
        // will set state to whatever is in the input
        this.setState({
            comments: this.state.comments,
            // run a function AFTER setting state
        }, () => {
            // check to see if input is blank, if blank alert user
            if (this.state.comments === '') {
                alert('LEAVE A COMMENT OR ELSE!');
            }
            // if input isn't blank, dispatch to reduxState and send state object
            else {
                this.props.dispatch({
                    type: 'BUTTON_CLICKED',
                    comments: this.state.comments,
                });
                // after dispatch, clear user input
                this.setState({
                    comments: '',
                });
            }
        });
    }

    // function that takes in value of input
    handleInput = (event) => {
        this.setState({
            comments: event.target.value,
        });
    }

    render() {

        return (
            <>
                <header style={{ textAlign: 'center' }}>

                    <h1>ANY COMMENTS YOU WANT TO LEAVE?</h1>

                </header>

                <form style={{ display: 'flex', justifyContent: 'center' }} onSubmit={this.handleClick}>

                    <input style={{ width: 209 }} value={this.state.comments} onChange={this.handleInput} placeholder="Comments?" />

                    <button>Next</button>

                </form>

                <ShowStatus history={this.props.history} />
            </>
        )
    }
}

export default connect()(FourthPage);