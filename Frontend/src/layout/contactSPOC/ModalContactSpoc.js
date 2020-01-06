import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {addTask} from "../../store/actions/addTask";
import M from 'materialize-css';  
import "materialize-css/dist/css/materialize.min.css";

class ModalContactSpoc extends Component {


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



    render() {

        return(

       <div>
           

           <a className="waves-effect waves-light btn modal-trigger" data-target="modalContactSpoc">Forward to SPOC</a>

              <div ref={Modal => {this.Modal = Modal}}
                           id="modalContactSpoc"
                           className="modal">
               
                               <div className="modal-content">
                               <h3>Forward Notification to SPOC</h3>
                               <div className="row">
                                   
               
                               </div>
               
                               <div className="modal-footer">
                                   <a href="#" className="modal-close waves-effect waves-red btn-flat">
                                   Return
                                   </a>
                                   <a href="#" className="modal-close waves-effect waves-blue btn-flat" >
                                   Send Message
                                   </a>
                               </div>
                               </div>
              </div>


          </div>
    

        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
    }
  }

export default connect(mapDispatchToProps)(ModalContactSpoc);