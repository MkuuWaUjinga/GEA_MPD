import React, { Component } from 'react';
import Taskbar from '../../../src/layout/taskbar/Taskbar';
import PeopleList from '../chat/peopleListSidebar/PeopleList';
import MessageList from './chatWindow/MessageList';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import './chat.css';


class MainChatView extends Component {

    state = {
        id: null,
    }



    componentDidMount() {

        let id = this.props.match.params.chat_id;
        this.setState({
            id: id
        })
    }





    render() {
        const cow_icon = require('../../assets/img/cow_icon.png');
        const screenshotScc = require('../../assets/img/SCCpic.PNG');
        const mhProfilePic = require('../../assets/img/mhProfilePic.png');


        return (
        <div className="chat row">
            <div className="main_chatView container col xl9">
                <div className="chatView">
                    <div className="sticky_header">
                        <div className="iconBorder"><img src={cow_icon} alt="cow_icon"></img></div>
                        <div className="chatHeader">
                            <p>{moment().format("MMM Do YYYY")}, {moment().format('LT')}</p>
                            <h4>High Somatic Cell Count detected in 5 Cows</h4>
                        </div>
                    </div>
                    <div className="scrollable content">
                        {/*/
                        <MessageList />  */}
                     <h5>{moment().format("MMM Do YYYY")}</h5>
                        <hr />
                        <div className="chatMsg">
                            <img src={mhProfilePic} alt="spocPicture" className="spocPic" />


                            <div className="msgContainer">
                                <div className="msgBox">
                                    <p id="userName">Magnus Hoffmann</p><span>{moment().format('LT')}</span>
                                </div>
                                <p id="chatContent">Hey, can you check these cows?</p>
                            </div>
                        </div>
                        <img src={screenshotScc} alt="screenshotScc" className="sccScreenshot"></img>

{/* 
                        <h5>23th Jan. 2020</h5>
                        <hr />

                        <div className="chatMsg">
                            <img src="http://philipp-bode.de/wp-content/uploads/2019/11/Philipp_Bode.jpg" alt="spocPicture" className="spocPic" />


                            <div className="msgContainer">
                                <div className="msgBox">
                                    <p id="userName">John Vermehren</p><span>8:21</span>
                                </div>
                                <p id="chatContent">badsfbldskfnaslkdnf</p>
                            </div>
                        </div>

                        <div className="chatMsg">
                            <img src="http://philipp-bode.de/wp-content/uploads/2019/11/Philipp_Bode.jpg" alt="spocPicture" className="spocPic" />


                            <div className="msgContainer">
                                <div className="msgBox">
                                    <p id="userName">John Vermehren</p><span>8:21</span>
                                </div>
                                <p id="chatContent">badsfbldskfnaslkdnf</p>
                            </div>
                        </div>



                        <h5>24th Jan. 2020</h5>
                        <hr />
*/}

 
                        {/*<h4>{this.state.id}</h4> */}
                    </div>



                    <textarea className="msgInputField" rows="5" cols="50" name="description" placeholder="Add a new message...">

                    </textarea>

                    <div className="ctaBar">
                        <i className="material-icons addMsg left">attach_file</i>
                        <i className="material-icons addMsg left">photo_camera</i>
                        <a className="btn"><i class="material-icons left">send</i>Send</a>

                    </div>
                </div>
                
            </div>
            <Taskbar />
         </div>
        )
    }
}

export default MainChatView;