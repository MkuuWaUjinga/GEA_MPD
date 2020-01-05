import React, {Component} from 'react';
import Taskbar from '../../../src/layout/taskbar/Taskbar'
import PeopleList from '../chat/peopleListSidebar/PeopleList'
import MessageList from '../chat/chatWindow/MessageList'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'

class MainChatView extends Component {
    render() {
        
        return(
        <div className="main_dashboard container row">
            <div className="chatView col xl9">
                    <div className="scrollable sidebar">
                        <PeopleList />
                    </div>

                    <div className="scrollable content">
                        <MessageList />
                    </div>
            </div>
            <Taskbar />
        </div>
        )
    }
}

export default MainChatView;