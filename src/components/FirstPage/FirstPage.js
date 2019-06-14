import React, { Component } from "react";

class FirstPage extends Component {

    handleClickFeelings = (event) => {
        event.preventDefault();
        console.log('works!');
    }

    render() {

        return(
            <>
            <h1>HOW ARE YOU FEELING TODAY?</h1>
            
            <form onSubmit={this.handleClickFeelings}>
            <input style={{width: 200}} placeholder="TYPE YOUR FEELINGS HERE!"/>
            <button>Next</button>
            </form>

            </>
        )
    }
}

export default FirstPage;