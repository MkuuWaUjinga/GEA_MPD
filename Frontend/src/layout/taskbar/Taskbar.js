import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteTask} from "../../store/actions/deleteTask";
import {addTask} from "../../store/actions/addTask";
import ModalAddTask from '../taskbar/ModalAddTask';
import "materialize-css/dist/css/materialize.min.css";
import "./taskbar.css";
import {Tabs, Tab} from "react-materialize";
import {fetchTasks} from '../../store/APIactions/fetchTasks';
import {bindActionCreators} from "redux";


class Taskbar extends Component {

    static renderTasks(task){
        return <NavLink to={"/chat/" + task.taskId} key={task.taskId}>
            <div className="card herdmgmt" key={task.taskId}>
                <div className="card-content">
                    <span className="card-title">{task.task_title}</span>
                    <i className="material-icons chat">chat</i>
                    <div className="alarm_msg">
                        <i className="material-icons">error</i>
                        <p>{task.description}</p>
                    </div>

                    <form action="#" className="checkboxes">
                        <p>Todos:</p>
                        <div className="check">
                            <p>
                                <label>
                                    <input type="checkbox"/>
                                    <span>14123</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input type="checkbox"/>
                                    <span>235324</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input type="checkbox"/>
                                    <span>325234</span>
                                </label>
                            </p>
                        </div>
                        {}
                    </form>

                    <div className="deleteTaskIcon" onClick={() => {
                        if (window.confirm('Delete the item?')) {
                            this.props.deleteTask(task.id)
                        }
                    }}><i className="material-icons delete">more_horiz</i></div>
                </div>
            </div>
        </NavLink>
    }

    render() {
        const {notifications} = this.props;
        const notificationList = notifications.length ? (
            notifications.map(notification => {
                return (
                    <div key={notification.id}><NavLink to={{
                        pathname: "/DetailHerdOverview",
                        aboutProps: {
                            link_id: "HERD_COUNT"
                        }
                    }}>
                        <li id="notificationCell">
                            <p>Jan 24, 2020</p>
                            <h5>{notification.title}</h5>
                            <div className="alarm_msg">
                                <i className="material-icons">error</i>
                                <p>{notification.content}</p>
                            </div>
                        </li>
                    </NavLink>
                    </div>
                )
            })
        ) : (
            <p>No notifications yet...</p>
        );
        const spocs = this.props.spocs;
        const bar = <div>
            <Tabs className="tabs-swipe-demo">
                <Tab className="col s2"
                     options={{
                         duration: 300,
                         onShow: null,
                         responsiveThreshold: Infinity,
                         swipeable: false
                     }}
                     title={<div
                         className="spocContactInfoIcon">ME</div>}>
                    <div id="test-swipe-1" className="col l12 swipeContent">
                        <div className="taskBox">
                            <h4 className="task-header">Tasks</h4>
                            <input type="text" placeholder="Search..." className="searchbar"></input>
                            <h6>Active</h6>
                            <div className="tasklist_container">
                                {this.props.user.userId in this.props.spocsToTask ? this.props.spocsToTask[this.props.user.userId].map(
                                    task => {
                                        return (
                                            Taskbar.renderTasks(task)
                                            )
                                    }
                                ) : <p>No tasks</p>}
                            </div>
                            <ModalAddTask payload="taskbar"/>
                            <div className="taskbar_footer">
                            <span><i className="material-icons">archive</i>Archive<i
                                className="material-icons">arrow_drop_down</i></span>
                            </div>
                        </div>
                    </div>
                </Tab>
                {
                    spocs.map(spoc => {
                            return (
                                <Tab className="col s2" key={spoc.userId}
                                     options={{
                                         duration: 300,
                                         onShow: null,
                                         responsiveThreshold: Infinity,
                                         swipeable: false
                                     }}
                                     title={<div
                                         className={"spocContactInfoIcon " + spoc.role}>{spoc.firstName.charAt(0) + spoc.lastName.charAt(0)}</div>}
                                >
                                    <div id="test-swipe-1" className="col l12 swipeContent">
                                        <div className="taskBox">
                                            <div className="spocInfo">
                                                <img
                                                    src="http://philipp-bode.de/wp-content/uploads/2019/11/Philipp_Bode.jpg"
                                                    alt="spocPicture" className="spocPic"/>
                                                <div className="spocContent">
                                                    <h5>{spoc.firstName + " " + spoc.lastName}</h5>
                                                    <p>{spoc.role}</p>
                                                    <div><i className="material-icons">phone_in_talk</i>{spoc.number}</div>
                                                    <div><i className="material-icons">markunread</i>{spoc.email}</div>
                                                </div>
                                            </div>
                                            <h4 className="task-header">Tasks</h4>
                                            <input type="text" placeholder="Search..." className="searchbar"></input>
                                            <h6>Active</h6>
                                            <div className="tasklist_container">
                                                {spoc.userId in this.props.spocsToTask ? this.props.spocsToTask[spoc.userId].map(
                                                    task => {
                                                        return (
                                                            Taskbar.renderTasks(task)
                                                        )
                                                    }):
                                                    <p>No tasks</p>}
                                            </div>
                                            <ModalAddTask payload="taskbar"/>
                                            <div className="taskbar_footer">
                            <span><i className="material-icons">archive</i>Archive<i
                                className="material-icons">arrow_drop_down</i></span>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                            )
                        }
                    )
                }
            </Tabs>
        </div>;


        return (

            <div className="task_sidebar col xl3">

                {this.props.isActive ? (
                    <div>
                        <div className="nav_notification">
                            Notifications
                        </div>
                        <ul>
                            {notificationList}
                        </ul>
                    </div>

                ) : (
                    null
                )}

                {bar}

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks,
        isActive: state.notifications.isActive,
        notifications: state.notifications.notifications,
        spocs: state.spocs.spocs,
        user: state.user.user,
        spocsToTask: state.tasks.spocsToTask
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        getTasks: bindActionCreators(fetchTasks, dispatch),
        deleteTask: (id) => dispatch(deleteTask(id)),
        addTask: (newTask) => dispatch(addTask(newTask))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Taskbar);