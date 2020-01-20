import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTask } from "../../store/actions/deleteTask";
import { addTask } from "../../store/actions/addTask";
import ModalAddTask from '../taskbar/ModalAddTask';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import "./taskbar.css";

class Taskbar extends Component {
  state = {
    task_title: '',
    task_description: ''
  }

  componentDidMount() {
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
    const { tasks } = this.props;
    const taskList = tasks.length ? (
      tasks.map(task => {
        return (
          <NavLink to={"/chat/" + task.id} >
            <div className="card herdmgmt" key={task.id} >
              <div className="card-content">
                <span className="card-title">{task.title}</span>
                <i className="material-icons chat">chat</i>
                <div className="alarm_msg">
                  <i className="material-icons">error</i>
                  <p>{task.description}</p>
                </div>
                
                {/*              <form action="#" className="checkboxes">
                <div className="check">
                 {task.todoList.length ? (


                    task.todoList.map(task => {
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
           */}



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

                <ul ref={Tabs => {
                    this.Tabs = Tabs;
                }}
                    className={this.props.isActive ? 'tabs tabs-swipe-demo active' : 'tabs tabs-swipe-demo'}
                >
                    <li className="tab col s2">
                        <a href="#test-swipe-1" ><div className="spocContactInfoIcon farmer"><span>Me</span></div></a>
                    </li>
                    <li className="tab col s2">
                        <a href="#test-swipe-2 "><div className="spocContactInfoIcon vet">JV</div></a>
                    </li>
                    <li className="tab col s2">
                        <a href="#test-swipe-3"><div className="spocContactInfoIcon dealer">AK</div></a>
                    </li>
                    <li className="tab col s2">
                        <a href="#test-swipe-4"><div className="spocContactInfoIcon consultant">SL</div></a>
                    </li>
                    <li className="tab col s2">
                        <a href="#test-swipe-5"><div className="spocContactInfoIcon technician">RA</div></a>
                    </li>
                    <i className="material-icons">more_vert</i>
                </ul>

                <div id="test-swipe-1" className="col l12 swipeContent">
                    <div className="taskBox">
                        <div className="spocInfo">
                            <img src="http://philipp-bode.de/wp-content/uploads/2019/11/Philipp_Bode.jpg" alt="spocPicture" className="spocPic" />
                            <div className="spocContent">
                                <h5>John Vermehren</h5>
                                <p>Vet</p>
                                <div><i className="material-icons">phone_in_talk</i>+49 234 2334534</div>
                                <div><i className="material-icons">markunread</i>john.vermehren@gmail.com</div>
                            </div>
                        </div>
                        <input type="text" placeholder="Search..." className="searchbar"></input>
                        <h6>Active</h6>
                        <div className="tasklist_container">
                            {taskList}
                        </div>
                        <ModalAddTask payload="taskbar" />
                        <div className="taskbar_footer">
                            <span><i className="material-icons">archive</i>Archive<i className="material-icons">arrow_drop_down</i></span>
                        </div>
                    </div>
                </div>
                <div id="test-swipe-2" className="col s12 red">
                    Technician
                </div>
                <div id="test-swipe-3" className="col s12 green">
                    Vet
                </div>
                <div id="test-swipe-4" className="col s12 purple">
                    Consultant
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
        addTask: (newTask) => dispatch(addTask(newTask))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Taskbar);