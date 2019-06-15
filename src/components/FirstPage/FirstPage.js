import React, { Component } from "react";
import { connect } from 'react-redux';

class FirstPage extends Component {

    state = {
        feelings: ''
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            feelings: this.state.feelings,
        }, () => {
            console.log(this.state.feelings);
            this.props.dispatch({
                type: 'BUTTON_CLICKED',
                feelings: this.state.feelings,
            })
            this.setState({
                feelings: '',
            }, () => {
                this.props.history.push('/second');
            });
        });
    }

    handleInput = (event) => {
        this.setState({
            feelings: event.target.value,
        });
    }

    render() {

        return (
            <>
                <h1>HOW ARE YOU FEELING TODAY?</h1>

                <form onSubmit={this.handleClick}>
                    <input type="number" min="1" max="10" style={{ width: 209 }} value={this.state.feelings} onChange={this.handleInput} placeholder="Rate your feelings between 1 to 10!" />
                    <button>Next</button>
                </form>

            </>
        )
    }
}

const mapReduxToState = (reduxState) => ({
    reduxState: reduxState,
});

export default connect(mapReduxToState)(FirstPage);