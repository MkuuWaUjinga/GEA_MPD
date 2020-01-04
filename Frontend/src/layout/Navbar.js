import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


class Navbar extends Component{

    render(){
    return (
        <nav className="nav-wrapper indigo darken-4">
            <div className="container">
                <Link to='/' className="brand-logo">Farmatic</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
        
    )
}
}

export default Navbar;