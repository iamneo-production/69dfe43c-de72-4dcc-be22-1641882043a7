import TextField from '@mui/material/TextField';
import AdminNavbar from './AdminNavbar';
import axios from 'axios';
import React, { Component, useState } from 'react';
import {Table} from 'react-bootstrap';

import Autocomplete from '@mui/material/Autocomplete';

function Admission() {
    const [data,setState]=React.useState({
        list:null
    });
    React.useEffect( ()=>{
        getData();
            },[]
        
            );

            const getData=()=>{
                fetch("http://localhost:8080/admission/getAll").then((response)=>{
                response.json().then((result)=>{
                    setState({
                        list:result
                    })
                })
            })
            }

    

    const deleteCourses =(id)=>
    {
      fetch("http://localhost:8080/courses/"+id,{
        method: "DELETE",
      }).then(()=>{
        alert("Subject deleted successfully");
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
            <th>Courses ID</th>
            <th>Courses Name</th>
            <th>Courses Duration</th>
            <th>Institute Name</th>
            <th>Action</th>
        </tr>
        </thead>
{
    data.list.map((item,i)=>
    <tbody>
    <tr>
        <td>{item.id}</td>
        <td>{item.coursesname}</td>
        <td>{item.coursesDuration}</td>
        <td>{item.institutename}</td>
        <td>
            <button>Edit</button>
            <button onClick={()=>{if(window.confirm('Are you sure you want to delete this?')) deleteCourses(item.id)}}>Delete</button>
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
export default Admission;