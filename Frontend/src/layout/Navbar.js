import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';

class Navbar extends Component {

    render() {

        const logo = require('../assets/img/logo_white.png');
        return (
            <nav className="nav-wrapper ">
                <div className="container">
                    <Link to='/' className="brand-logo">                
                        <div className="farmony_logo col s6 ">
                            <img src={logo} alt="farmony"></img>
                        </div>
                    </Link>
                    <SignedInLinks />
                </div>
            </nav>
        )
    }
}

export default Navbar;