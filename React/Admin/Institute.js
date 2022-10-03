import TextField from '@mui/material/TextField';
import AdminNavbar from './AdminNavbar';
import axios from 'axios';
import React, { Component, useState } from 'react';
import {Table} from 'react-bootstrap';

function Institute() {
    const initialData = {institutename: "", adderss: "" };
    const [values, setValues] = React.useState(initialData);
    const [data,setState]=React.useState({
        list:null
    });
    const [display,setDisplay]=React.useState({
        visible:null
    });
    const handleFormInputs = (name, value) => {

        setValues({

            ...values,

            [name]: value

        });
    }
    React.useEffect( ()=>{
getData();
    },[]

    );

const getData=()=>{
    fetch("http://localhost:8080/institute/getAll").then((response)=>{
    response.json().then((result)=>{
        setState({
            list:result
        })
    })
})
}

    const saveInstitute =()=>{
        console.log(values);
       
        axios.post('http://localhost:8080/institute/saveinstitute',values).then((res)=>{
            console.log(res.data);
            alert("Institute added successfully!!");
            
        })
    }

    const deleteInstitute =(id)=>
    {
      fetch("http://localhost:8080/institute/"+id,{
        method: "DELETE",
      }).then(()=>{
        alert("Subject deleted successfully");
        getData();
      })
    }

    const addInstitute=()=>{
        setDisplay({
            visible: "show"
        })
    }
    return (
    <>
    <AdminNavbar/><br/><br/>
    {data.list?
    <Table className="instituteTable">
        <thead>
            <tr>
            <th>Institute ID</th>
            <th>Institute Name</th>
            <th>Address</th>
            <th>Actions</th>
        </tr>
        </thead>
{
    data.list.map((item,i)=>
    <tbody>
    <tr>
        <td>{item.id}</td>
        <td>{item.institutename}</td>
        <td>{item.address}</td>
        <td>
            <button>Edit</button>
            <button onClick={()=>{if(window.confirm('Are you sure you want to delete this?')) deleteInstitute(item.id)}}>Delete</button>
        </td>
    </tr>
    </tbody>
    )
}
    </Table>
    :
    <p>Loading...</p>
}
<br/>
    <div>
        <button onClick={addInstitute}>Add Institute</button>
    </div>
<div className='addBox' id={display.visible}>
    <form className="addInstituteForm">
    <TextField id="outlined-basic" label="Institute Name" variant="outlined" onChange={(e) => { handleFormInputs('institutename', e.target.value) }} /><br></br>
    <br/><br/>
    <TextField id="outlined-basic" label="adress" variant="outlined" onChange={(e) => { handleFormInputs('address', e.target.value) }} /><br></br>
    <br/><br/>
    <button className='button' onClick={saveInstitute}>Add Institute</button>
    </form>
    </div>
    </>
    );
}
export default Institute;