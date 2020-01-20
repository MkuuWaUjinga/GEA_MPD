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
        selected_spoc_ids: [""],
        spocs: { vet: false, consultant: false, technician: false, dealer: false }
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
    this.props.addTask({title: this.state.task_title, description: this.state.task_description, todoList: this.state.todoList});
    this.setState({task_title:'', task_description:'', todo:'', todoList:'',selected_spoc_ids:'', spocs:''});
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
let toggle = this.state.spocs[id];
console.log("TOGGLE STATUS!",this.state);
if (toggle===false) {
  this.setState({
    ...this.state,
    selected_spoc_ids: [
      ...this.state.selected_spoc_ids,
      [id]
    ],
    spocs: {...this.state.spocs, [id]: true}
  })

} else {

  this.setState({
    ...this.state,
    selected_spoc_ids: [
      ...this.state.selected_spoc_ids,
      
      this.state.selected_spoc_ids.filter(x => {
        return x !==[id]
      }) 
    ],
    spocs: {...this.state.spocs, [id]: false}
  })
}


}




    render() {

      const screenshotScc = require('../../assets/img/screenshotScc.png');

      const todos = this.state.todoList;
      const todoList = todos.length ? (
        todos.map( todo => {
          return (
          <li>{todo}</li>
          )
        })
 
      ) : null

        return(

   <div>
           
      <a className="waves-effect waves-light btn modal-trigger modalAddTask" data-target="ModalAddTask"><i class="material-icons left">send</i> Create Task</a>

        <div ref={Modal => {this.Modal = Modal}}
          id="ModalAddTask"
          className="modal">

            <div className="modal-content">
              <div className="modalHeader">
                <a href="#" className="modal-close">
                        <i class="material-icons">close</i>
                  </a>

                  <p>Assign Task:</p>

                  <div className="spocsList">
                      <div className={this.state.spocs['dealer'] ? "active singleSPOC":"singleSPOC"} onClick={()=> this.setSpocId('dealer')}>
                          <img src="http://philipp-bode.de/wp-content/uploads/2019/11/Philipp_Bode.jpg" alt="spocPicture" className="spocPicModal" />
                          
                          <p>DEALER</p>
                          <p>Tim Koy</p>
                      </div>

                      <div className={this.state.spocs['vet'] ? "active singleSPOC":"singleSPOC"} onClick={()=> this.setSpocId('vet')}>
                          <img src="http://philipp-bode.de/wp-content/uploads/2019/11/Philipp_Bode.jpg" alt="spocPicture" className="spocPicModal" />
                          
                          <p>VET</p>
                          <p>John Vermehren</p>
                      </div>

                      <div className={this.state.spocs['technician'] ? "active singleSPOC":"singleSPOC"} onClick={()=> this.setSpocId('technician')}>
                          <img src="http://philipp-bode.de/wp-content/uploads/2019/11/Philipp_Bode.jpg" alt="spocPicture" className="spocPicModal" />
                          
                          <p>TECHNICIAN</p>
                          <p>Jan Lauterbach</p>
                      </div>


                      <div className={this.state.spocs['consultant'] ? "active singleSPOC":"singleSPOC"} onClick={()=> this.setSpocId('consultant')}>
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
                  <label for="todo">To Do List</label>
                  <a className="btn-floating btn-large waves-effect waves-light blue" onClick={this.addTodo}><i className="material-icons">add</i></a>

                </div>


                <textarea id="description" className="msgInputField" rows="5" cols="50" name="description" placeholder="Add a new message..." onChange={this.handleTaskFormChange}></textarea>
              




                  <div className="ctaBar">
                      <i className="material-icons addMsg left">attach_file</i>
                      <i className="material-icons addMsg left">photo_camera</i>
                      <a className="btn modal-close" onClick={this.handleTaskFormSubmit}><i class="material-icons left">send</i>Create Task</a>

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