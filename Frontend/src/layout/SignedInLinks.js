import React, {Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {toggleNotification} from "../store/actions/toggleNotification";
import M from 'materialize-css';  

class SignedInLinks extends Component {





    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225, coverTrigger: false});
    /*
        axios.get(`https://3f4bvj6fub.execute-api.eu-central-1.amazonaws.com/dev/cows`)
        .then(res => {
          console.log(res)
        })
    */
    }

    handleNotificationToggle = () => {
        if (this.props.isActive === true) {
            this.props.toggleNotification(false)
        } else {
            this.props.toggleNotification(true)
        }
    }


    render(){

        const mhProfilePic = require('../assets/img/mhProfilePic.png');



        return(

        <ul className="right">
            {/*
            <li>
                    <div className="input-field col s6 ">
                        <i className="material-icons prefix">search</i>
                        <input placeholder="Search" id="search_input" type="text" className="validate white-text "></input>
                    </div>
            </li> */}
            {/* 
            <li>    
                    <NavLink to="/chat" className="btn-floating white" >
                        <i className="btn-floating white material-icons indigo-text text-darken-4">chat_bubble</i>
                    </NavLink>
            </li>
                */}
            <li>    
                    <small id="notification-badge">1</small>
                    <span className={this.props.isActive ? 'btn-floating  active' : 'btn-floating white ligthen-2 pulse'}  onClick={this.handleNotificationToggle}>
                        <i className="bellIcon material-icons indigo-text text-darken-4">notifications</i>
                    </span>
            </li>

{/*
            <li><NavLink to="/" className='btn btn-floating  blue darken-1'></NavLink></li>
*/}
             <li><img src={mhProfilePic} alt="farmerPicture" className="FarmerProfilePic" /></li>
            
        </ul>
    )
}
}
 const mapStateToProps = (state) => {
     return {
        isActive: state.notifications.isActive
     }
 }

 const mapDispatchToProps = (dispatch) => {
     return {
         toggleNotification: (newStatus) => dispatch(toggleNotification(newStatus))
     }
 }






export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);