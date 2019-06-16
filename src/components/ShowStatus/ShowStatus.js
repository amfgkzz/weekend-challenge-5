import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowStatus extends Component {

    showIncomplete() {
        return <button disabled>Incomplete</button>;
    }

    showSubmit() {
        return <button onClick={this.handleClickSubmit}>Submit</button>;
    }

    handleClickSubmit = () => {
        console.log('submit');
        this.props.dispatch({
            type: 'CLEAR_FEEDBACK',
        });
        this.props.dispatch({
            type: 'GO_TO_REVIEW',
            payload: false,
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <div className="App">
                    <header className="review-feedback-header">
                        <h1>Review Your Feedback!</h1>
                        <ul style={{ listStyleType: 'none' }}>

                            <li>Feelings: {this.props.reduxState.feedbackReducer.length < 1 ? 0 : this.props.reduxState.feedbackReducer[0].feelings}</li>
                            <li>Understanding: {this.props.reduxState.feedbackReducer.length < 2 ? 0 : this.props.reduxState.feedbackReducer[1].understand}</li>
                            <li>Support: {this.props.reduxState.feedbackReducer.length < 3 ? 0 : this.props.reduxState.feedbackReducer[2].support}</li>
                            <li>Comments: {this.props.reduxState.feedbackReducer.length < 4 ? 0 : this.props.reduxState.feedbackReducer[3].comments}</li>

                        </ul>
                        {this.props.reduxState.feedbackReducer.length < 4 ? this.showIncomplete() : this.showSubmit()}
                    </header>
                </div>
            </>
        )
    }
}

const mapReduxToState = (reduxState) => ({
    reduxState: reduxState,
});

export default connect(mapReduxToState)(ShowStatus);