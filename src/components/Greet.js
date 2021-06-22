//for the functional Components use only props.name dont use this keyword
//props Deconstructing
import React from 'react'

function Greet(props) {
    const {name,college} = props
    return (
        <div>
            <h1> Greet name {name} and college {college}</h1>
        </div>
    )
}

export default Greet
