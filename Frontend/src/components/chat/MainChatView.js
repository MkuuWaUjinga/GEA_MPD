import React, { Component } from 'react';
import Taskbar from '../../../src/layout/taskbar/Taskbar';
import PeopleList from '../chat/peopleListSidebar/PeopleList';
import MessageList from './chatWindow/MessageList';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './chat.css';


class MainChatView extends Component {

    state = {
        id: null
    }



componentDidMount() {
    
    let id = this.props.match.params.chat_id;
    this.setState({
        id: id
    })
}



    render() {
        const cow_icon = require('../../assets/img/cow_icon.png');
        return (
            <div className="main_chatView container row">
                <div className="chatView col xl12">
                        <div className="sticky_header">
                                    <div className="iconBorder"><img src={cow_icon} alt="cow_icon"></img></div>
                                    <div className="chatHeader">
                                        <p>4. Oct 16:45</p>
                                        <h4>High Somatic Cell Count detected in 5 Cows</h4>
                                    </div>
                        </div>
                        <div className="scrollable content">
                                <MessageList />
                                <h5>23th Jan. 2020</h5>
                                <hr />
                                    <div className="chatMsg">
                                        <img src="http://philipp-bode.de/wp-content/uploads/2019/11/Philipp_Bode.jpg" alt="spocPicture" className="spocPic"/>
                                        <div className="msgBox">
                                            <div><p id="userName">John Vermehren</p><p>8:21</p></div>
                                            <p id="chatContent">badsfbldskfnaslkdnf</p>
                                        </div>
                                    </div>
                    

                                <h5>24th Jan. 2020</h5>
                                <hr />

                                {/*<h4>{this.state.id}</h4> */}
                        </div>
                </div>
                <Taskbar />
            </div>
        )
    }
}

export default MainChatView;