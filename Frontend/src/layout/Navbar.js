import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import nav_background from "../assets/img/nav_background.svg"
import {logo} from '../assets/img/logo_white.png'



class Navbar extends Component{

    render(){

    const logo = require('../assets/img/logo_white.png');
    return (
            <nav className="nav-wrapper ">
            {/*<img className="nav_backround_img"></img>   */}
                <div className="container">
                    <Link to='/' className="brand-logo">                <div className="farmony_logo col s6 ">
                   <img src={logo} alt="farmony"></img>
                </div></Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
    )
}
}

export default Navbar;