import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewPage extends Component {

    handleClick = () => {
        this.props.dispatch({
            type: 'NEW_FEEDBACK',
            payload: true,
        });
    }

    render() {

        return (
            <>
                <header style={{ textAlign: 'center' }}>

                    <h1 >Thank You!</h1>

                </header>

                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <button onClick={this.handleClick}>Leave New Feedback</button>

                </div>

            </>
        )
    }
}

export default connect()(ReviewPage);