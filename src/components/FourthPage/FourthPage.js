import React, { Component } from "react";
import ShowStatus from '../ShowStatus/ShowStatus';
import { connect } from 'react-redux';

class FourthPage extends Component {

    state = {
        comments: '',
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            comments: this.state.comments,
        }, () => {
            if (this.state.comments === '') {
                alert('LEAVE A COMMENT OR ELSE!');
            }
            else {
                this.props.dispatch({
                    type: 'BUTTON_CLICKED',
                    comments: this.state.comments,
                });
                this.setState({
                    comments: '',
                });
            }
        });
    }

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