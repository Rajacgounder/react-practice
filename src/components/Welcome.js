//for Class Component always use this.props

import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name,college}=this.props
        return (
            <div>
                 <h1>Welcome name {name} and college {college}</h1>
            </div>
        )
    }
}

export default Welcome
