import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteTask} from "../../store/actions/deleteTask";
import {addTask} from "../../store/actions/addTask";
import ModalAddTask from '../taskbar/ModalAddTask';
import M from 'materialize-css';  
import "materialize-css/dist/css/materialize.min.css";

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


deleteTask = (id) => {
    console.log(id)
    this.props.deleteTask(id)
}


handleTaskFormChange = (e) => {
 this.setState({
    [e.target.id]: e.target.value
 })
}

handleTaskFormSubmit = (e) => {
    e.preventDefault();
    this.props.addTask({title: this.state.task_title, description: this.state.task_description});
    this.setState({task_title:'', task_description:''});
}






    render() {
        const {tasks} = this.props;
        const taskList = tasks.length ? (
            tasks.map(task => {
                return (
                    <div className="card blue-grey darken-1" key={task.id}>
                        <div className="card-content white-text">
                            <span className="card-title">{task.title}</span>
                            <p>{task.description}</p>
                            <div className="center">
                            <button className="btn grey" onClick={() => this.props.deleteTask(task.id)}>
                                Delete Task
                            </button>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No tasks yet...</div>
        );

        const {notifications} = this.props;
        const notificationList = notifications.length ? (
            notifications.map(notification => {
              return (
                <div key={notification.id}><NavLink to={{
                  pathname: "/DetailHerdOverview",
                  aboutProps: {
                    link_id: "HERD_COUNT"
                  }
                }} >
                    <li>
                      <h5>{notification.title}</h5>
                      <p>{notification.content}</p>
                    </li>
                  </NavLink>
                  <hr />
                </div>
              )
            })
        ) :(
          <p>No notifications yet...</p>
        );


        return(

    <div className="task_sidebar col xl3">
          <div>
            {this.props.isActive ? (
              <ul>
              {notificationList} 
              </ul>
            ) : null}
          </div>

        <ul ref={Tabs => {
            this.Tabs = Tabs;
          }}
          id="tabs-swipe-demo"
          className="tabs"
        >
          <li className="tab col s3">
            <a href="#test-swipe-1">Farmer</a>
          </li>
          <li className="tab col s3">
            <a href="#test-swipe-2">Technician</a>
          </li>
          <li className="tab col s3">
            <a href="#test-swipe-3">Vet</a>
          </li>
          <li className="tab col s3">
            <a href="#test-swipe-4">Consultant</a>
          </li>
        </ul>

        <div id="test-swipe-1" className="col l12 blue">
          <div className="taskBox">
              <h5>Milk Quality</h5>
              {taskList} 
              <ModalAddTask />
             
     {/* 
        <a className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"> Create new Task</a>

        <div ref={Modal => {this.Modal = Modal}}
          id="modal1"
          className="modal">

            <div className="modal-content">
            <h3>Create a new Task</h3>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col l12">
                            <input id="task_title" type="text" data-length="20" onChange={this.handleTaskFormChange}/>
                            <label htmlFor="task_title">Task Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col l12">
                            <textarea id="task_description" type="materialize-textarea" data-length="50" onChange={this.handleTaskFormChange}/>
                            <label htmlFor="task_description">Task Description</label>
                        </div>
                    </div>
                </form>

            </div>

            <div className="modal-footer">
                <a href="#" className="modal-close waves-effect waves-red btn-flat">
                Return
                </a>
                <a href="#" className="modal-close waves-effect waves-green btn-flat" onClick={this.handleTaskFormSubmit}>
                Create
                </a>
            </div>
          </div>
          </div>

*/}
            <hr></hr>

            <h5>Herd Management</h5>
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
                </div>
            </div>


            <hr></hr>

            <h5>Feed Management</h5>
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
                </div>
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