import React, {Component} from 'react';
import Taskbar from '../../../src/layout/taskbar/Taskbar';
import PeopleList from '../chat/peopleListSidebar/PeopleList';
import MessageWindow from './chatWindow/MessageWindow';
import MessageListTest from '../chat/chatWindow/MessageListTest';
import ChatComponent from '../chat/components/App/index'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';


class MainChatView extends Component {
    render() {
        
        return(
        <div className="main_dashboard container row">
            <div className="chatView col xl9">
                <div className="row">
                   {/* 
                    <div className="scrollable sidebar col xl3">
                        <PeopleList />
                    </div>

                    <div className="scrollable content xl9">
                        <MessageWindow />
                    </div>
                    */}
                    <ChatComponent />
                </div>
            </div>
            <Taskbar />
        </div>
        )
    }
}

export default MainChatView;