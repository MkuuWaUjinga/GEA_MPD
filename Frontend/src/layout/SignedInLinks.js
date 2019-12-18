import React, {Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import M from 'materialize-css';  

class SignedInLinks extends Component {





    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225, coverTrigger: false});
    }


    render(){


        const {notifications} = this.props;
        const notificationList = notifications.map(notification => {
            return(
                <div>
                    <li><NavLink to="/milkoutputdetails" >{notification.message}</NavLink></li>
                    <li class="divider" tabindex="-1"></li>
                </div>
            )
        })






        return(

        <ul className="right">
            <li>
                    <div className="input-field col s6 ">
                        <i className="material-icons prefix">search</i>
                        <input placeholder="Search" id="search_input" type="text" className="validate white-text "></input>
                    </div>
                </li>
            <li>
                    <span className="dropdown-trigger btn-floating pulse white ligthen-2" data-target="dropdown1" onClick={this.showMenu}>
                        <i className="bellIcon material-icons indigo-text text-darken-4">notifications</i>
                        <small className="notification-badge">3</small>
                    </span>

                    <ul id='dropdown1' className='dropdown-content'>
                        {notificationList}
                    </ul>
                


            </li>

            <li><NavLink to="/" className='btn btn-floating  lighten-1'>NN</NavLink></li>

            
        </ul>
    )
}
}
export default SignedInLinks;