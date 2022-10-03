import TextField from '@mui/material/TextField';
import AdminNavbar from './AdminNavbar';
import axios from 'axios';
import React, { Component, useState } from 'react';
import {Table} from 'react-bootstrap';

import Autocomplete from '@mui/material/Autocomplete';

function StudentList() {
    const [data,setState]=React.useState({
        list:null
    });
    React.useEffect( ()=>{
        getData();
            },[]
        
            );

            const getData=()=>{
                fetch("http://localhost:8080/api/getAll").then((response)=>{
                response.json().then((result)=>{
                    console.log(result)
                    setState({
                        list:result
                    })
                })
            })
            }

    

    const deleteUser =(id)=>
    {
      fetch("http://localhost:8080/api"+id,{
        method: "DELETE",
      }).then(()=>{
        alert("User deleted successfully");
        getData();
      })
    }

    return (
    <>
    <AdminNavbar/><br/><br/>
    {data.list?
    <Table className="CoursesTable">
        <thead>
            <tr>
            <th>ID</th>
            <th>email</th>
            <th>password</th>
            <th>username</th>
            <th>usertype</th>
            <th>Action</th>
        </tr>
        </thead>
{
    data.list.map((item,i)=>
    <tbody>
    <tr>
        <td>{item.id}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.username}</td>
        <td>{item.usertype}</td>
        <td>
            <button>Edit</button>
            <button onClick={()=>{if(window.confirm('Are you sure you want to delete this?')) deleteUser(item.id)}}>Delete</button>
        </td>
    </tr>
    </tbody>
    )
}
    </Table>
    :
    <p>Loading...</p>
}

    
    </>
    );
}
export default StudentList;