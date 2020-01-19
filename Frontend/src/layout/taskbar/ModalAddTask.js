import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {addTask} from "../../store/actions/addTask";
import M from 'materialize-css';  
import "materialize-css/dist/css/materialize.min.css";
import './ModalStyle.css'

class ModalAddTask extends Component {
    state = {
        task_title: '',
        task_description: '',
        todo: '',
        todoList: [""],
        selected_spoc_ids: [""] 
      }

componentDidMount() {
        M.Tabs.init(this.Tabs);
        M.updateTextFields();
        

        console.log("PAYLOAD", this.props.payload)

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
 console.log("current state", this.state)
}

handleTaskFormSubmit = (e) => {
    e.preventDefault();
    this.props.addTask({title: this.state.task_title, description: this.state.task_description});
    this.setState({task_title:'', task_description:'', todo:'', todoList:''});
    console.log("current state", this.state)
}


addTodo = (e) => {
  e.preventDefault();
  this.setState({
    ...this.state,
    todoList: [...this.state.todoList, this.state.todo]
  })
}


setSpocId (id) {

}





    render() {

      const screenshotScc = require('../../assets/img/screenshotScc.png');

      const todos = this.state.todoList;
      const todoList = todos.length ? (
        todos.map( todo => {
          return (
          <li key="todo-input">{todo}</li>
          )
        })
 
      ) : null

        return(

       
   <div>
           
      <a className="waves-effect waves-light btn modal-trigger modalAddTask" data-target="ModalAddTask"><i className="material-icons left">send</i> Create Task</a>

        <div ref={Modal => {this.Modal = Modal}}
          id="ModalAddTask"
          className="modal">

            <div className="modal-content">
              <div className="modalHeader">
                <a href="#" className="modal-close">
                        <i className="material-icons">close</i>
                  </a>

                  <p>Assign Task:</p>

                  <div className="spocsList">
                      <div className="singleSPOC" onClick={this.setSpocId('spoc_id_dealer')}>
                          <img src="http://philipp-bode.de/wp-content/uploads/2019/11/Philipp_Bode.jpg" alt="spocPicture" className="spocPicModal" />
                          
                          <p>DEALER</p>
                          <p>Tim Koy</p>
                      </div>

                      <div className="singleSPOC" onClick={this.setSpocId('spoc_id_vet')}>
                          <img src="http://philipp-bode.de/wp-content/uploads/2019/11/Philipp_Bode.jpg" alt="spocPicture" className="spocPicModal" />
                          
                          <p>VET</p>
                          <p>John Vermehren</p>
                      </div>

                      <div className="singleSPOC" onClick={this.setSpocId('spoc_id_technician')}>
                          <img src="http://philipp-bode.de/wp-content/uploads/2019/11/Philipp_Bode.jpg" alt="spocPicture" className="spocPicModal" />
                          
                          <p>TECHNICIAN</p>
                          <p>Jan Lauterbach</p>
                      </div>


                      <div className="singleSPOC" onClick={this.setSpocId('spoc_id_consultant')}>
                          <img src="http://philipp-bode.de/wp-content/uploads/2019/11/Philipp_Bode.jpg" alt="spocPicture" className="spocPicModal" />
                          
                          <p>CONSULTANT</p>
                          <p>Rilke Ammer</p>
                      </div>

                  </div>



              </div>
              
                <form >
                        <div className="input-field ">
                            <input id="task_title" type="text" data-length="20" onChange={this.handleTaskFormChange}/>
                            <label htmlFor="task_title">Headline</label>
                        </div>
                </form>

                <img src={screenshotScc} alt="screenshotScc"></img>
                

                <ul>
                   {todoList}
                </ul>

                <div className="input-field ">
                  <input id="todo" type="text" className="todoInput" placeholder="Add a To Do" onChange={this.handleTaskFormChange}/>
                  <label htmlFor="todo">To Do List</label>
                  <a className="btn-floating btn-large waves-effect waves-light blue" onClick={this.addTodo}><i className="material-icons">add</i></a>

                </div>


                <textarea id="description" className="msgInputField" rows="5" cols="50" name="description" placeholder="Add a new message..." onChange={this.handleTaskFormChange}></textarea>
              




                  <div className="ctaBar">
                      <i className="material-icons addMsg left">attach_file</i>
                      <i className="material-icons addMsg left">photo_camera</i>
                      <a className="btn modal-close" onClick={this.handleTaskFormSubmit}><i className="material-icons left">send</i>Create Task</a>

                  </div>



            </div>
          </div>
        </div>
    

        )
    }
}

const mapStateToProps = (state) => {
  return {
    
  }
}




const mapDispatchToProps = (dispatch) => {
    return {
      addTask: (newTask) => dispatch(addTask(newTask))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddTask);