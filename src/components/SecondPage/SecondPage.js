import React, { Component } from "react";

class SecondPage extends Component {

    handleClick = (event) => {
        event.preventDefault();
        console.log('works also!');
    }

    render() {

        return(
            <>
            <h1>HOW WELL ARE YOU UNDERSTANDING THE CONCEPTS?</h1>
            
            <form onSubmit={this.handleClick}>
            <input style={{width: 200}} placeholder="Understanding?"/>
            <button>Next</button>
            </form>

            </>
        )
    }
}

export default SecondPage;