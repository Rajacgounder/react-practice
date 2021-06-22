import React, { Component } from 'react'

class ClassClick extends Component {
    ClassHandler(){
        console.log("button clicked in class");
    }
    render() {
        return (
            <div>
                 <button onClick={this.ClassHandler}>Class Click</button>  
            </div>
        )
    }
}

export default ClassClick
