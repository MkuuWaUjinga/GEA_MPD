import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import nav_background from "../assets/img/nav_background.svg"



class Navbar extends Component{

    render(){
    return (
            <nav className="nav-wrapper ">
            {/*<img className="nav_backround_img"></img>   */}
                <div className="container">
                    <Link to='/' className="brand-logo">farmony</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
    )
}
}

export default Navbar;