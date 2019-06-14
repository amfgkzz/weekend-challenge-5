import React, { Component } from "react";
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
                    <input style={{ width: 200 }} value={this.state.understand} onChange={this.handleInput} placeholder="Understand?" />
                    <button>Next</button>
                </form>

            </>
        )
    }
}

export default connect()(SecondPage);