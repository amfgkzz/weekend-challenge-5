import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowStatus extends Component {

    render() {
        return (
            <>
                <div className="App">
                    <header className="review-feedback-header">
                        <h1>Review Your Feedback!</h1>
                        <ul style={{ listStyleType: 'none' }}>

                            <li>Feelings: </li>
                            <li>Understanding: </li>
                            <li>Support: </li>
                            <li>Comments: </li>

                        </ul>
                        <button>Incomplete</button>
                    </header>
                </div>
            </>
        )
    }
}

export default connect()(ShowStatus);