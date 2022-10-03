
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom'
import React, { Component, useState } from 'react'
import axios from 'axios';


function SignUp() {
    
    const initialData = { usertype: "", username: "", email: "", password: "" };
    const [values, setValues] = useState(initialData);
    const adminUserList = [
        { label: 'Admin', id: 'admin' },
        { label: 'User', id: 'user' }];
    const handleFormInputs = (name, value) => {
        console.log(value);
        setValues({

            ...values,

            [name]: value

        });
    }
    const saveUser =()=>{
       if(validate()){
        login();
       }
    }
    const validate=()=>{
        var isValid=true;
        if(!values.email){
           console.log("hi");
        }
        return false;
    }

const login=()=>{
    axios.post('http://localhost:8080/api/saveuser',values).then((res)=>{
        console.log(res.data);
        alert("User created successfully!!");
        window.location="/Login";
    })
}
    
    return (
        <div>
            <div>
                <h1 className='register'>Register</h1>
            </div>
            <br></br>
            <form>
            <div className='container'>
                <Autocomplete
                    id="admin-user"
                    options={adminUserList}
                    onChange={(e,newValue) =>{
                        handleFormInputs('usertype',newValue.id);
                    }

                    }
                    //getOptionLabel={(option) => option.title}
                    style={{ width: 220, marginLeft: 648 }}
                    renderInput={(params) => <TextField {...params} label="admin/user" variant="filled" />}
                />
                <br></br>
                <TextField id="filled-basic" label="Enter email" variant="filled" onChange={(e) => { handleFormInputs('email', e.target.value) }} /><br></br>
                <br></br>
                <TextField id="filled-basic" label="Enter Username" variant="filled" onChange={(e) => { handleFormInputs('username', e.target.value) }} /><br></br>
                <br></br>
                <TextField id="filled-basic" label="Enter Mobilenumber" variant="filled"  /><br></br>
                <br></br>
                <TextField
                id="filled-password-input"
                name="password"  
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                onChange={(e) => { handleFormInputs('password', e.target.value) }}
                /><br></br>
                <br></br>
                <TextField
                id="filled-password-input"
                name="password"  
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                onChange={(e) => { handleFormInputs('password', e.target.value) }}
                /><br></br>
            </div>
            <br></br>
                <button className='button' onClick={saveUser}>Submit</button><br></br>
                <br></br>
            </form>
            <p>Already a user?</p><Link className="front_link" to="/Login">Login</Link>
        </div>
        
    );
}
export default SignUp;
