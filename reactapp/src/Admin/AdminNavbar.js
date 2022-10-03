import React, { Component } from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import img from './image/download.jpg'
export default class AdminNavbar extends Component {
  render() {
    return (
      <div>
          <Navbar className='navbar' variant="light" expand="lg">
              
      
          
              <Navbar.Brand href=""><h2 className='brand'> ABACUS ACADEMY</h2></Navbar.Brand>
    
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link><Link className='navLink' to="/institutes">Institutes</Link></Nav.Link>
                      <Nav.Link><Link className='navLink' to="/courses">Courses</Link></Nav.Link>
                      <Nav.Link><Link className='navLink' to="/studentList">StudentsList</Link></Nav.Link>
                      <Nav.Link><Link className='navLink' to="/admissions">Admissions</Link></Nav.Link>
                      <Nav.Link><Link className='navLink' to="/Logout">Logout</Link></Nav.Link>
                  </Nav>
              </Navbar.Collapse>
         
      </Navbar>
      </div>
    )
  }
}