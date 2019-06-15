import React, { Component } from "react";
import { connect } from 'react-redux';

class ThirdPage extends Component {

    state = {
        support: ''
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            support: this.state.support,
        }, () => {
            console.log(this.state.support);
            this.props.dispatch({
                type: 'BUTTON_CLICKED',
                support: this.state.support,
            })
            this.setState({
                support: '',
            }, () => {
                this.props.history.push('/fourth');
            });
        });
    }

    handleInput = (event) => {
        this.setState({
            support: event.target.value,
        });
    }

    render() {

        return (
            <>
                <h1>HOW WELL ARE YOU BEING SUPPORTED?</h1>

                <form onSubmit={this.handleClick}>
                    <input type="number" min="1" max="10" style={{ width: 209 }} value={this.state.support} onChange={this.handleInput} placeholder="Rate your support between 1 to 10!" />
                    <button>Next</button>
                </form>

            </>
        )
    }
}

export default connect()(ThirdPage);