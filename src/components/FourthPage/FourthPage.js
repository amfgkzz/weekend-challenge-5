import React, { Component } from "react";

class FourthPage extends Component {

    handleClickComment = (event) => {
        event.preventDefault();
        console.log('EVERYTHING WORKS! FOR NOW!');
    }

    render() {

        return(
            <>
            <h1>ANY COMMENTS YOU WANT TO LEAVE?</h1>
            
            <form onSubmit={this.handleClickComment}>
            <input style={{width: 200}} placeholder="Comments?"/>
            <button>Next</button>
            </form>

            </>
        )
    }
}

export default FourthPage;