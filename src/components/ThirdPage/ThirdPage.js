import React, { Component } from "react";

class ThirdPage extends Component {

    handleClickSupport = (event) => {
        event.preventDefault();
        console.log('this works too!');
    }

    render() {

        return(
            <>
            <h1>HOW WELL ARE YOU BEING SUPPORTED?</h1>
            
            <form onSubmit={this.handleClickSupport}>
            <input style={{width: 200}} placeholder="Supported?"/>
            <button>Next</button>
            </form>

            </>
        )
    }
}

export default ThirdPage;