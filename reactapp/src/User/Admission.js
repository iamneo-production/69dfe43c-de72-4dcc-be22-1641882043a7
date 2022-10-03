import React, {Component} from 'react';
import UserNavbar from './Navbar';
import {Link} from 'react-router-dom'
import { duration } from '@mui/material';
export default class UserAdmission extends Component{
    constructor(){
        super();
        this.state={
            list:null,
            course:null,
            duration:null,
            institute:null
        
        }
       
        this.handleChange=this.handleChange.bind(this);
        this.saveAdmission=this.saveAdmission.bind(this);
    }
    componentDidMount(){
        this.getData();
    }

    handleChange(e)
    {
        this.setState({
            course:e.target.value
        });
    }

saveAdmission(){
    var dur="";
    var inst="";
        this.state.list.forEach(x=>{
            if(x.coursesname===this.state.course){
                    dur=x.coursesDuration;
                    inst=x.institutename;
            }
        });

    this.sendDetails(dur,inst);
}



sendDetails(Duration,Institute){
    fetch("https://8080-fbfcecabdfeffcbcfcaeccfaecbcfbbaf.examlyiopb.examly.io/admission/saveadmission",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "studentid":parseInt(localStorage.getItem('User')),
            "coursesname": this.state.course,
            "coursesDuration": Duration,
            "institutename": Institute
        })
        }).then((response)=>{
            alert("Enrolled Successfully");
    })
}

    getData(){
        fetch("https://8080-fbfcecabdfeffcbcfcaeccfaecbcfbbaf.examlyiopb.examly.io/courses/getAll").then((response)=>{
            response.json().then((result)=>{
                this.setState({
                    list:result
                })
            })
        })
    }
    render(){
        return (
<>
<UserNavbar/><br/><br/>
<div className='admissions'>
    <h2> Please select a COURSE to get ADMISSION</h2><br/>
    
    <label>Select Subject : </label>
      {
        this.state.list ?
        <div>
      <select name="subject" onChange={this.handleChange} value={this.state.course}>
        <option value="select option">Select Option</option>
     {
     this.state.list.map((item,i)=>
    <option value={item.coursesname}>{item.coursesname}</option>
   )
   }
   </select><br/>
   <button onClick={this.saveAdmission}>Enroll</button>
   </div>
   :
   <p>Add Subject</p>
      }
</div>
</>
        )
    }
}