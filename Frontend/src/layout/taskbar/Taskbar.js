import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTask } from "../../store/actions/deleteTask";
import { addTask } from "../../store/actions/addTask";
import ModalAddTask from '../taskbar/ModalAddTask';
import M from 'materialize-css';
import moment from 'moment';
import "materialize-css/dist/css/materialize.min.css";
import "./taskbar.css";
import {bindActionCreators} from "redux";
import {fetchTasks} from "../../store/APIactions/fetchTasks";

class Taskbar extends Component {
    state = {
        task_title: '',
        task_description: ''
    }

    componentDidMount() {
        this.props.getTasks();

        M.Tabs.init(this.Tabs);
        M.updateTextFields();
        const options = {
            onOpenStart: () => {
                console.log("Open Start-1");
            },
            onOpenEnd: () => {
                console.log("Open End-2");
            },
            onCloseStart: () => {
                console.log("Close Start-3");
            },
            onCloseEnd: () => {
                console.log("Close End-4");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%"
        };
        M.Modal.init(this.Modal, options);

    }


    handleTaskFormChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleTaskFormSubmit = (e) => {
        e.preventDefault();
        this.props.addTask({ title: this.state.task_title, description: this.state.task_description });
        this.setState({ task_title: '', task_description: '' });
    }


    render() {

        
        const mhProfilePic = require('../../assets/img/mhProfilePic.png');


        const { tasks } = this.props;
        console.log("TASSSKKKS!!!",tasks);
        const taskList = tasks.length ? (
            tasks.map(task => {
                return (
                    <NavLink to={"/chat"} >
                        <div className="card herdmgmt" key={task.id} >
                            <div className="card-content">
                                <span className="card-title">{task.task_title}</span>
                                <i className="material-icons chat">chat</i>

                                <p className="taskDescription">{task.description}</p>
{/* 
                                <div className="alarm_msg">
                                    <i className="material-icons">error</i>
                                    <p>{task.description}</p>
                                </div>
*/}

                                {  <form action="#" className="checkboxes">
                                        <div className="check">
                                        {task.todos.length ? (


                                            task.todos.map(task => {
                                                return (
                                                <p>
                                                <label>
                                                    <input type="checkbox" />
                                                    <span>{task}</span>
                                                </label>
                                                </p>
                                                )
                                            })

                                        ) : (
                                            null
                                        )}
                                    </div>
                                </form>
                                }



                                <div className="deleteTaskIcon" onClick={() => { if (window.confirm('Delete the item?')) { this.props.deleteTask(task.id) }; }}><i className="material-icons delete">more_horiz</i></div>

                            </div>
                        </div>
                    </NavLink>
                )
            })
        ) : (
                <div className="center">No tasks yet...</div>
            );

        const { notifications } = this.props;
        const notificationList = notifications.length ? (
            notifications.map(notification => {
                return (
                    <div key={notification.id}><NavLink to={{
                        pathname: "/DetailHerdOverview",
                        aboutProps: {
                            link_id: "HERD_COUNT"
                        }
                    }} >
                        <li id="notificationCell">
                        <div className="card" >
                            <div className="card-content">

                            <p>{moment().format("ddd D, YYYY")}</p>
                            <div><i className="material-icons chat orange-text">report_problem</i><h5>{notification.title}</h5></div>
                            {/* 
                            <div className="alarm_msg">
                                <i className="material-icons">error</i>
                                <p>{notification.content}</p>
                            </div>
                            */}
                            </div>
                            </div>

                        </li>
                    </NavLink>
                    </div>
                )
            })
        ) : (
                <p>No notifications yet...</p>
            );


        return (

            <div className="task_sidebar col xl3">

                {this.props.isActive ? (
                    <div>
                        <div className="nav_notification">
                            Notifications
                        </div>
                        <ul className="notification_list">
                            {notificationList}
                        </ul>
                    </div>

                ) : (
                        null
                    )}

                <ul ref={Tabs => {
                    this.Tabs = Tabs;
                }}
                    className={this.props.isActive ? 'tabs tabs-swipe-demo active' : 'tabs tabs-swipe-demo'}
                >
                    <li className="tab col s2">
                        <a href="#test-swipe-1" ><div className="spocContactInfoIcon vet"><p>MH</p></div></a>
                    </li>
                    <li className="tab col s2">
                        <a href="#test-swipe-2 "><div className="spocContactInfoIcon farmer"><p>JV</p></div></a>
                    </li>
                    <li className="tab col s2">
                        <a href="#test-swipe-3"><div className="spocContactInfoIcon dealer"><p>AK</p></div></a>
                    </li>
                    <li className="tab col s2">
                        <a href="#test-swipe-4"><div className="spocContactInfoIcon consultant"><p>SL</p></div></a>
                    </li>
                    <li className="tab col s2">
                        <a href="#test-swipe-5"><div className="spocContactInfoIcon technician"><p>RA</p></div></a>
                    </li>
                    <i className="material-icons">more_vert</i>
                </ul>

                <div id="test-swipe-1" className="col l12 swipeContent">
                    <div className="taskBox">
                                <div className="spocInfo">
                                    <img src={mhProfilePic} alt="farmerPicture" className="spocPic" />
                                    <div className="spocContent">
                                        <h5>Magnus Hoffmann</h5>
                                        <p>Farmer</p>
                                        <div><i className="material-icons">phone_in_talk</i><p>+49 234 23345334</p></div>
                                        <div><i className="material-icons">markunread</i><p>magnus.hoffmann@gmail.com</p></div>
                                    </div>
                                </div>

                                <input type="text" placeholder="Search..." className="searchbar"></input>
                                <h6>Active</h6>


                             <div className="card farmer"  >
                                <div className="card-content">
                                <span className="card-title">Phone with Technician</span>
                                <i className="material-icons chat">chat</i>
                                <label>
                                    <input type="checkbox" />
                                    <span>Show him broken pump</span>
                                </label>
                                <div className="deleteTaskIcon" ><i className="material-icons delete">more_horiz</i></div>
                                </div>
                            </div>
                            <div className="card farmer"  >
                                <div className="card-content">
                                <span className="card-title">Check Cow-ID 231</span>
                                <i className="material-icons chat">chat</i>
                                <label>
                                    <input type="checkbox" />
                                    <span>Get her a new feed trough</span>
                                </label>
                                <div className="deleteTaskIcon" ><i className="material-icons delete">more_horiz</i></div>
                                </div>
                            </div>


                            {/* <ModalAddTask payload="taskbar" /> */}
                                <div className="add_task_btn"><i className="material-icons">add</i></div>
                                <div className="taskbar_footer">
                                    <span><i className="material-icons">archive</i><p>Archive</p><i className="material-icons">arrow_drop_down</i></span>
                                </div>
                        </div>
                </div>
                <div id="test-swipe-2" className="col s12 swipeContent">
                    <div className="taskBox">
                            <div className="spocInfo">
                                <img src="http://philipp-bode.de/wp-content/uploads/2019/11/Philipp_Bode.jpg" alt="spocPicture" className="spocPic" />
                                <div className="spocContent">
                                    <h5>John Vermehren</h5>
                                    <p>Vet</p>
                                    <div><i className="material-icons">phone_in_talk</i><p>+49 234 24586734</p></div>
                                    <div><i className="material-icons">markunread</i><p>john.vermehren@gmail.com</p></div>
                                </div>
                            </div>
                            <input type="text" placeholder="Search..." className="searchbar"></input>
                            <h6>Active</h6>
                            <div className="tasklist_container">
                                {taskList}
                            </div>
                        {/* <ModalAddTask payload="taskbar" /> */}
                            <div className="add_task_btn"><i className="material-icons">add</i></div>
                            <div className="taskbar_footer">
                                <span><i className="material-icons">archive</i><p>Archive</p><i className="material-icons">arrow_drop_down</i></span>
                            </div>
                    </div>
                </div>
                <div id="test-swipe-3" className="col s12 swipeContent ">
                        <div className="taskBox">
                                <div className="spocInfo">
                                    <img src="https://peterhurley.com/sites/default/files/styles/large/public/photos/2019/05/13/karl_008phweb.jpg?itok=TnqJTcg7" alt="farmerPicture" className="spocPic" />
                                    <div className="spocContent">
                                        <h5>Tim Koy</h5>
                                        <p>Dealer</p>
                                        <div><i className="material-icons">phone_in_talk</i><p>+49 234 2744534</p></div>
                                        <div><i className="material-icons">markunread</i><p>tim.koy@gmail.com</p></div>
                                    </div>
                                </div>
                                <input type="text" placeholder="Search..." className="searchbar"></input>
                                <h6>Active</h6>
                            {/* <ModalAddTask payload="taskbar" /> */}
                            
                            <div className="card dealer"  >
                                <div className="card-content">
                                <span className="card-title">Please order new rubber</span>
                                <i className="material-icons chat">chat</i>
                                <label>
                                    <input type="checkbox" />
                                    <span>Quantity: 500</span>
                                </label>
                                <div className="deleteTaskIcon" ><i className="material-icons delete">more_horiz</i></div>
                                </div>
                            </div>


                                <div className="add_task_btn"><i className="material-icons">add</i></div>
                                <div className="taskbar_footer">
                                    <span><i className="material-icons">archive</i><p>Archive</p><i className="material-icons">arrow_drop_down</i></span>
                                </div>
                        </div>
                </div>
                <div id="test-swipe-4" className="col s12 swipeContent">
                                        <div className="taskBox">
                                <div className="spocInfo">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiOBcnv1xTyyjyIJnuPx6pfkG1ay_7qzdMZdjPAVnBGwTBmInF&s" alt="farmerPicture" className="spocPic" />
                                    <div className="spocContent">
                                        <h5>Jan Lauterbach</h5>
                                        <p>Technician</p>
                                        <div><i className="material-icons">phone_in_talk</i><p>+49 234 23647534</p></div>
                                        <div><i className="material-icons">markunread</i><p>jan.lauterbach@gmail.com</p></div>
                                    </div>
                                </div>
                                <input type="text" placeholder="Search..." className="searchbar"></input>
                                <h6>Active</h6>
                            {/* <ModalAddTask payload="taskbar" /> */}

                            <div className="card technician"  >
                                <div className="card-content">
                                <span className="card-title">Missing receipt</span>
                                <i className="material-icons chat">chat</i>
                                <label>
                                    <input type="checkbox" />
                                    <span>Please send me receipt of last technician service </span>
                                </label>
                                <div className="deleteTaskIcon" ><i className="material-icons delete">more_horiz</i></div>
                                </div>
                            </div>

                                <div className="add_task_btn"><i className="material-icons">add</i></div>
                                <div className="taskbar_footer">
                                    <span><i className="material-icons">archive</i><p>Archive</p><i className="material-icons">arrow_drop_down</i></span>
                                </div>
                        </div>
                </div>

                <div id="test-swipe-5" className="col s12 swipeContent">
                                        <div className="taskBox">
                                <div className="spocInfo">
                                    <img src="https://image.brigitte.de/11267664/large1x1-622-622/725315d84ae2843ffc46dcf4f507245/EX/teaser.jpg" alt="farmerPicture" className="spocPic" />
                                    <div className="spocContent">
                                        <h5>Rilke Ammer</h5>
                                        <p>Feed Consultant</p>6
                                        <div><i className="material-icons">phone_in_talk</i><p>+49 234 2386734</p></div>
                                        <div><i className="material-icons">markunread</i><p>rilke.ammer@gmail.com</p></div>
                                    </div>
                                </div>
                                <input type="text" placeholder="Search..." className="searchbar"></input>
                                <h6>Active</h6>
                            {/* <ModalAddTask payload="taskbar" /> */}
                            <div className="card consultant"  >
                                <div className="card-content">
                                <span className="card-title">Please call me back</span>
                                <i className="material-icons chat">chat</i>
                                <p className="taskDescription">I couldn't reach you. We need to talk about the feed ratio for next week.</p>
                                <div className="deleteTaskIcon" ><i className="material-icons delete">more_horiz</i></div>
                                </div>
                            </div>
                                <div className="add_task_btn"><i className="material-icons">add</i></div>
                                <div className="taskbar_footer">
                                    <span><i className="material-icons">archive</i><p>Archive</p><i className="material-icons">arrow_drop_down</i></span>
                                </div>
                        </div>
                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks,
        isActive: state.notifications.isActive,
        notifications: state.notifications.notifications
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => dispatch(deleteTask(id)),
        addTask: (newTask) => dispatch(addTask(newTask)),
        getTasks: bindActionCreators(fetchTasks, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Taskbar);