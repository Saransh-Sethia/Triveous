import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar(props) {
  return (
    <div>
    <nav className="primary-nav">
        <NavLink to='/' className='home'>Home</NavLink>
    {/* </nav> 
     <nav className="secondary-nav"> */}
        <NavLink className="nav" to='/login'>Logout</NavLink>
        <NavLink className="nav" to='/signup'>Signup</NavLink>
        <h2 className="h2">{props.name ? `Welcome - ${props.name}` : "Please Login"}</h2>
    </nav>
    
    </div>
  )
}

export default Navbar;