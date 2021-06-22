import React, { Component } from 'react'

 class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          message:"Hello bro"   
        }
    }
    change(){
        this.setState({
            message:"Welcome Soto"
        })
    }

    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.change()}>Subcribe</button>
            </div>
        )
    }
}

export default State
