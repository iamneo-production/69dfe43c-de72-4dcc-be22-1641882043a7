
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import React, {Component} from 'react';

export default class SignUp extends Component {
    
    constructor(){
        super();
        this.state={
        fields: {},
        errors: {}
    }
    this.handleChange=this.handleChange.bind(this);
    this.submitForm=this.submitForm.bind(this);
    this.validateForm=this.validateForm.bind(this);
    }
    handleChange(e){
    let fields=this.state.fields;
    fields[e.target.name]=e.target.value;
    this.setState({
    fields
    });
}

submitForm(e){
    e.preventDefault();
    if(this.validateForm()) { 
        this.SignUp();
    }
    }
    validateForm(){
    let fields=this.state.fields;
    let errors={};
    let isValid=true;
    if(!fields["email"]) { 
        isValid=false;
        errors["email"]="*Please enter a email";
    }
    if(!fields["username"]){
        isValid=false;
        errors["username"]="*Please enter a username";
    }
    if(!fields["number"]){
        isValid=false;
        errors["number"]="*Please enter a number";
    }
    if(!fields["password"]){
        isValid=false;
        errors["password"]="*Please enter a password";
    }
    if(!fields["cpassword"]){
        isValid=false;
        errors["cpassword"]="*Please enter a password";
    }
    this.setState({
    errors: errors
    });
    return isValid;
}
SignUp(){
    fetch("https://8080-fbfcecabdfeffcbcfcaeccfaecbcfbbaf.examlyiopb.examly.io/api/saveuser",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.fields)
    }).then(()=>{
        alert("New user created successfully");
        window.location="/Login";
    })
}
render (){


    return (
    <div>
        <div>
            <h1 className='register'>Register</h1>
        </div>
        <br></br>
        <div className='container'>

            <br></br>
            <form onSubmit={this.submitForm}>
            <select name="usertype" onChange={this.handleChange} value={this.state.fields.usertype}>
<option value="select">Select Option</option>
<option value="admin">Admin</option>
<option value="user">User</option>
            </select><br/><br/>
            <TextField id="filled-basic" label="Enter email" variant="filled" name="email" value={this.state.fields.email} onChange={this.handleChange}/><br></br>
            <br></br>
            <div className='error'>{this.state.errors.email}</div>
            <TextField id="filled-basic" label="Enter Username" variant="filled" name="username" value={this.state.fields.username} onChange={this.handleChange}/><br></br>
            <br></br>
            <div className='error'>{this.state.errors.username}</div>
            <TextField id="filled-basic" label="Enter Mobilenumber" variant="filled" name="number" value={this.state.fields.number} onChange={this.handleChange}/><br></br>
            <br></br>
            <div className='error'>{this.state.errors.number}</div>
            <TextField id="filled-basic" label="Password" variant="filled" name="password" value={this.state.fields.password} onChange={this.handleChange}/><br></br>
            <br></br>
            <div className='error'>{this.state.errors.password}</div>
            <TextField id="filled-basic" label="Confirm Password" variant="filled" name="cpassword" value={this.state.fields.cpassword} onChange={this.handleChange}/><br></br>
            <br></br>
            <div className='error'>{this.state.errors.cpassword}</div>
            <button className='button' >Submit</button>
            </form>
            <br></br>
            <br></br>
            <p>Already a user?</p><Link className="front_link" to="/Login">Login</Link>
        </div>
    </div>
    );
  }
  
}