import React from 'react';
import {NavLink} from 'react-router-dom';


const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" >  <span className="dropdown-trigger btn-floating pulse white ligthen-2" >
                <i className="bellIcon material-icons indigo-text text-darken-4">notifications</i>
                <small className="notification-badge">5</small>
                  </span>
            </NavLink></li>

            <li><NavLink to="/" className='btn btn-floating  lighten-1'>NN</NavLink></li>

            
        </ul>
        
    )
}

export default SignedInLinks;