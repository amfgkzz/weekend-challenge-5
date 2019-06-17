import React, { Component } from "react";
import ShowStatus from '../ShowStatus/ShowStatus';
import { connect } from 'react-redux';

class SecondPage extends Component {

    state = {
        understanding: ''
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            understanding: this.state.understanding,
        }, () => {
            if (this.state.understanding === '') {
                alert('TELL ME HOW WELL YOU ARE UNDERSTANDING OR ELSE!');
            }
            else {
                this.props.dispatch({
                    type: 'BUTTON_CLICKED',
                    understanding: this.state.understanding,
                })
                this.setState({
                    understanding: '',
                }, () => {
                    this.props.history.push('/third');
                });
            }
        });
    }

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