import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Table} from 'react-bootstrap';

export default class Home extends Component {

render() {
    return (
    <>
    <div>Home</div>
    <Table>
       <tr>

         <td> <Link className="front_link" to="/Login"><button className="homebtn">Login</button></Link></td> 
        <td> <Link classiame="front_link" to="/signup"><button className="homebtn">Signup</button></Link></td>
         </tr>
         </Table>
    
    </>
    )
    
 }
}