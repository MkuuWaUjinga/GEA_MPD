import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {addTask} from "../../store/actions/addTask";
import M from 'materialize-css';  
import "materialize-css/dist/css/materialize.min.css";

class ModalAddTask extends Component {
    state = {
        task_title: '',
        task_description: ''
      }

componentDidMount() {
        M.Tabs.init(this.Tabs);
        M.updateTextFields();
        
        const options = {
            onOpenStart: () => {
              console.log("Open Start");
            },
            onOpenEnd: () => {
              console.log("Open End");
            },
            onCloseStart: () => {
              console.log("Close Start");
            },
            onCloseEnd: () => {
              console.log("Close End");
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
    this.props.addTask({title: this.state.task_title, description: this.state.task_description});
    this.setState({task_title:'', task_description:''});
}






    render() {

        return(

       
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
                            <label for="task_title">Task Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col l12">
                            <textarea id="task_description" type="materialize-textarea" data-length="50" onChange={this.handleTaskFormChange}/>
                            <label for="task_description">Task Description</label>
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

    

        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      addTask: (newTask) => dispatch(addTask(newTask))
    }
  }

export default connect(mapDispatchToProps)(ModalAddTask);