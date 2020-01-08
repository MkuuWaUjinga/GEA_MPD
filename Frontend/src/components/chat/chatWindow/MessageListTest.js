import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class MessageListTest extends Component {
    render() {

        return(
        <div className="">
            HELLOOOO
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
    }
}


export default connect(mapStateToProps)(MessageListTest);