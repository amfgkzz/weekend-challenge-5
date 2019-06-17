import React, { Component } from "react";
import ShowStatus from '../ShowStatus/ShowStatus';
import { connect } from 'react-redux';

class FirstPage extends Component {

    state = {
        feeling: ''
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            feeling: this.state.feeling,
        }, () => {
            this.props.dispatch({
                type: 'BUTTON_CLICKED',
                feeling: this.state.feeling,
            })
            this.setState({
                feeling: '',
            }, () => {
                this.props.history.push('/second');
            });
        });
    }

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

const mapReduxToState = (reduxState) => ({
    reduxState: reduxState,
});

export default connect(mapReduxToState)(FirstPage);