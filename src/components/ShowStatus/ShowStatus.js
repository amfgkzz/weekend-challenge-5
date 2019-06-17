import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ShowStatus extends Component {

    // this function will run on load, determines what button to show on DOM
    showIncomplete() {
        return <button disabled>Incomplete</button>;
    }

    // this function will run on load, determines what button to show on DOM
    showSubmit() {
        return <button onClick={this.handleClickSubmit}>Submit</button>;
    }

    // this function will run on button click
    handleClickSubmit = () => {
        // created a variable to shorten reduxState; easier to reuse
        const feedback = this.props.reduxState.feedbackReducer;
        // created a new variable object
        let newData = {};
        // this forLoop will go through each object in that reduxState array
        for (let i = 0; i < feedback.length; i++) {
            // created a variable for each object in that reduxState array
            const element = feedback[i];
            // combined all the objects in the reduxState array and store it in newData object
            Object.assign(newData, element);
        }
        // will return a function taking in newData object
        return this.postData(newData);
    }

    // this function will run AFTER handClickSubmit
    postData = (update) => {
        // runs an axios call that will send the newData object to the server
        axios({
            method: 'POST',
            url: '/feedbackdata',
            data: update,
            // after sending the data, run a new function
        }).then(() => {
            // this function will send TWO dispatches to reduxState
            this.props.dispatch({
                type: 'CLEAR_FEEDBACK',
            });
            this.props.dispatch({
                type: 'GO_TO_REVIEW',
                payload: false,
            });
            // then it will move the user to the first page
            this.props.history.push('/');
        });
    }

    render() {
        return (
            <>
                <div className="App">

                    <header className="review-feedback-header">

                        <h1>Review Your Feedback!</h1>

                        <ul style={{ listStyleType: 'none' }}>

                            <li>Feelings: {this.props.reduxState.feedbackReducer.length < 1 ? 0 : this.props.reduxState.feedbackReducer[0].feeling}</li>
                            <li>Understanding: {this.props.reduxState.feedbackReducer.length < 2 ? 0 : this.props.reduxState.feedbackReducer[1].understanding}</li>
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