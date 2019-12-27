import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


class Navbar extends Component{
    state = {
        notifications:[
            {id : 1, type :'SomaticCellCountAlert', message:'Somatic cell count of 5 cows is higher than usual!'},
            {id : 2, type:'Alert', message : 'Your AMS is broken.'},
            {id : 3, type:'Notification', message :'Your cows are not feeling great.'}
        ]
    }
    render(){
    return (
        <nav className="nav-wrapper indigo darken-4">
            <div className="container">
                <Link to='/' className="brand-logo">Farmatic</Link>
                <SignedInLinks notifications={this.state.notifications}/>
                <SignedOutLinks />
            </div>
        </nav>
        
    )
}
}

export default Navbar;