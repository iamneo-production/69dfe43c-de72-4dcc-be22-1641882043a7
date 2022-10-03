import React, { Component } from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class UserNavbar extends Component {
  render() {
    return (
      <div>
          <Navbar className='navbar' variant="light" expand="lg">
            
              <Navbar.Brand href=""><h2 className='brand'>ABACUS ACADEMY</h2></Navbar.Brand>
    
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link><Link className='navLink' to="/userAdmission">Admisissions</Link></Nav.Link>
                      <Nav.Link><Link className='navLink' to="/viewUserAdmission">View Admisissions</Link></Nav.Link>
                      <Nav.Link><Link className='navLink' to="/Logout">Logout</Link></Nav.Link>
                  </Nav>
              </Navbar.Collapse>
         
      </Navbar>
      </div>
    )
  }
}