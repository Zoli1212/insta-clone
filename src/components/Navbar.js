import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {

    return <nav>
       
    <div className="nav-wrapper white">
        <a href="/" className="brand-logo left">Instagram</a>
        <ul id="nav-mobile" className="right">
            <li><NavLink to="/signin">Login</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            
        </ul>
        
    </div>
    </nav>
}
    
     

