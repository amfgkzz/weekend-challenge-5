import React, { Component } from "react";
import ShowStatus from '../ShowStatus/ShowStatus';
import { connect } from 'react-redux';

class SecondPage extends Component {

    state = {
        understand: ''
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            understand: this.state.understand,
        }, () => {
            console.log(this.state.understand);
            this.props.dispatch({
                type: 'BUTTON_CLICKED',
                understand: this.state.understand,
            })
            this.setState({
                understand: '',
            }, () => {
                this.props.history.push('/third');
            });
        });
    }

    handleInput = (event) => {
        this.setState({
            understand: event.target.value,
        });
    }

    render() {

        return (
            <>
                <h1>HOW WELL ARE YOU UNDERSTANDING THE CONCEPTS?</h1>

                <form onSubmit={this.handleClick}>
                    <input type="number" min="1" max="10" style={{ width: 209 }} value={this.state.understand} onChange={this.handleInput} placeholder="Rate your understanding from 1 to 10!" />
                    <button>Next</button>
                </form>

                <ShowStatus history={this.props.history}/>

            </>
        )
    }
}

export default connect()(SecondPage);