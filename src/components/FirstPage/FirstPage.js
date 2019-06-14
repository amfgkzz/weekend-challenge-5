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
                <pre>
                    {JSON.stringify(this.props, null, 2)}
                </pre>
                <h1>HOW ARE YOU FEELING TODAY?</h1>

                <form onSubmit={this.handleClick}>
                    <input style={{ width: 200 }} value={this.state.feelings} onChange={this.handleInput} placeholder="TYPE YOUR FEELINGS HERE!" />
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