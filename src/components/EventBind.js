import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:"hello world"
        }
        this.handleClick=this.handleClick.bind(this);
    }

handleClick(){
    this.setState({
        message: "welcome"
    })
}

    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default EventBind
