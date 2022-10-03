import TextField from '@mui/material/TextField';
import AdminNavbar from './AdminNavbar';
import axios from 'axios';
import React, { Component, useState } from 'react';
import {Table} from 'react-bootstrap';

import Autocomplete from '@mui/material/Autocomplete';

function Courses() {
    const initialData = {coursesname: "", coursesDescription: "",coursesDuration:"",institutename:"" };
    const [values, setValues] = React.useState(initialData);
    const [instituteData,setInstituteData] = React.useState([]);
    const adminUserList = [
        { label: 'Admin', id: 'admin' },
        { label: 'User', id: 'user' }];
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
    fetch("http://localhost:8080/courses/getAll").then((response)=>{
    response.json().then((result)=>{
        setState({
            list:result
        })
    })
})
}

    const saveCourses =()=>{
        console.log(values);
       
        axios.post('http://localhost:8080/courses/savecourses',values).then((res)=>{
            console.log(res.data);
            alert("Courses added successfully!!");
            
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

    const addCourses=()=>{

        fetch("http://localhost:8080/institute/getAll").then((response)=>{
    response.json().then((result)=>{
        console.log(result);

        const newarr = result.map(optionList);

        setInstituteData(newarr);




    })
})

        setDisplay({
            visible: "show"
        })
    }

    function optionList(value){
        return {'label':value.institutename,'id':value.id}
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
            <th>Courses Description</th>
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
        <td>{item.coursesDescription}</td>
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
<br/>
    <div>
        <button onClick={addCourses}>Add Courses</button>
    </div>
<div className='addBox' id={display.visible}>
    <form className="addCoursesForm">
     
    <TextField id="outlined-basic" label="Courses Name" variant="outlined" onChange={(e) => { handleFormInputs('coursesname', e.target.value) }} /><br></br>
    <br/><br/>
    <TextField id="outlined-basic" label="Courses Description" variant="outlined" onChange={(e) => { handleFormInputs('coursesDescription', e.target.value) }} /><br></br>
    <br/><br/>
    <TextField id="outlined-basic" label="Courses Duration" variant="outlined" onChange={(e) => { handleFormInputs('coursesDuration', e.target.value) }} /><br></br>
    <br/><br/>
   {/* <TextField id="outlined-basic" label="Institute Name" variant="outlined" onChange={(e) => { handleFormInputs('institutename', e.target.value) }} /><br></br>
    <br/><br/>*/}

    <Autocomplete
                    id="instituteNames"
                    options={instituteData}
                    onChange={(e,newValue) =>{
                        handleFormInputs('institutename',newValue.label);
                    }

                    }
                    //getOptionLabel={(option) => option.title}
                    style={{ width: 220, marginLeft: 625 }}
                    renderInput={(params) => <TextField {...params} label="institute Names" variant="outlined" />}
                />
                <br></br>


    <button className='button' onClick={saveCourses}>Add Courses</button>
    </form>
    </div>
    </>
    );
}
export default Courses;