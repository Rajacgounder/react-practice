//Form Handling

import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:'',
             password:'',
             qualification:'10th'
        }
    }

    handleChangeName = (e) =>{
            this.setState({
                name:e.target.value
            })
    }
    onChangeEmail =(e) =>{
        this.setState({
            email:e.target.value
        })
    }

    onChangePass =(e)=>{
        this.setState({
            password:e.target.value
        })
    }

    onChangeQ=(e)=>{
        this.setState({
            qualification:e.target.value
        })
    }

      onSubmit = (e) => {
          console.log(`${this.state.name}  ${this.state.email} ${this.state.qualification}`);
          alert(`${this.state.name}  ${this.state.email} ${this.state.qualification}`);
        e.preventDefault();
      }
    

    render() {
        const {
            name,
            email,
            password,
            qualification
        }=this.state;
        return (
            <form onSubmit={this.onSubmit}>
            <label>User Registration</label>
            <br/>
                <div>                
                    <label>Name</label>
                    <input type="text" value={name} onChange={this.handleChangeName} required/>
                </div>
                <div>                
                    <label>Email</label>
                    <input type="email" value={email} onChange={this.onChangeEmail} required/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password } onChange={this.onChangePass} required/>
                </div>
                <div>
                <label>Qualifcation</label>
                <select value={qualification} onChange={this.onChangeQ} required>
                    <option value="PG">PG</option>
                    <option value="UG">UG</option>
                    <option value="+2">+2</option>
                    <option value="10th">10th</option>
                </select>
                </div>
                <button type="submit" >Submit</button>
            </form>
        )
    }
}

export default Form
