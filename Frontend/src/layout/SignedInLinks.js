import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleNotification } from "../store/actions/toggleNotification";
import M from 'materialize-css';

class SignedInLinks extends Component {

    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, { inDuration: 300, outDuration: 225, coverTrigger: false });

    }

    handleNotificationToggle = () => {
        if (this.props.isActive === true) {
            this.props.toggleNotification(false)
        } else {
            this.props.toggleNotification(true)
        }
    }

    render() {

        const mhProfilePic = require('../assets/img/mhProfilePic.png');

        return (

            <ul className="right">

                <li>
                    <small id="notification-badge">1</small>
                    <span className={this.props.isActive ? 'btn-floating  active' : 'btn-floating white ligthen-2 pulse'} onClick={this.handleNotificationToggle}>
                        <i className="bellIcon material-icons indigo-text text-darken-4">notifications</i>
                    </span>
                </li>


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