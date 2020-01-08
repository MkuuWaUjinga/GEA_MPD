import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import MessageList from '../chatWindow/MessageList';
class MessageWindow extends Component {
    render() {

        
        return(
        <div className="">
            <div className="messengerHeader">
                <div className="row">
                    <div className ="col l10">
                         <i className="material-icons">settings</i>
                    </div>
                    <div className ="col l2">
                        <i className="material-icons">call</i>
                        <i className="material-icons">videocam</i>
                        <i className="material-icons">info</i>
                    </div>
                </div>
            </div>
            <MessageList />
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        
    }
}


export default connect(mapStateToProps)(MessageWindow);