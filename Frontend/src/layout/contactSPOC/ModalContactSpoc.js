import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {addChatMessage} from "../../store/actions/addChatMessage";
import M from 'materialize-css';  
import "materialize-css/dist/css/materialize.min.css";

class ModalContactSpoc extends Component {

  state = {
    notificationProp: this.props.notificationPayload,
    message_content: ''
  }


componentDidMount() {
    console.log("hier ist notificationProp", this.state.notificationProp)
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
  console.log("current state", this.state)
 }
 
 handleTaskFormSubmit = (e) => {
     e.preventDefault();
     this.props.addChatMessage({message_content: this.state.message_content});
     this.setState({message_content:''});
     console.log("current state", this.state)
 }
 
 
    render() {

      const {spocs} = this.props;
      const spocList = spocs.length ? (
          spocs.map(spoc => {
            return (
              <div className="col l3" key={spoc.userId}>
                    <a className="btn-floating btn-large waves-effect waves-light blue">{spoc.role}</a>
              </div>
            )
          })
      ) :(
        <p>No Spocs defined yet...</p>
      );

      const notificationList = this.state.notificationProp.cows? (
         this.state.notificationProp.cows.map(cow => {
            return (
              <li key={cow.cow_id}>
                    <p >{cow.cow_id}</p>
              </li>
            )
          }
      )) :(
        <p>No Notes are being forwarded...</p>
      );

      




     return(

       <div>
           <a className="waves-effect waves-light btn modal-trigger" data-target="modalContactSpoc">Forward to SPOC</a>
              <div ref={Modal => {this.Modal = Modal}}
                           id="modalContactSpoc"
                           className="modal">
               
                               <div className="modal-content">
                               <h3>Forward Notification to SPOC</h3>
                               <div className="row">
                                 <p>Select your SPOC:</p>
                                     {spocList}
                               </div>
                               <div className="row">
                                 <p>These notifications will be forwarded:</p>
                                  <ul>
                                      {notificationList}
                                  </ul>
                               </div>
                               {/* 
                               <div className="row">
                                <div className="input-field col l12">
                                    <textarea id="chat_message" type="materialize-textarea" data-length="50" onChange={this.handleTaskFormChange}/>
                                    <label htmlFor="chat_message">Add a message for your SPOC</label>
                                </div>
                               </div>
                                */}
                               <div className="modal-footer">
                                   <a href="#" className="modal-close waves-effect waves-red btn-flat">
                                   Return
                                   </a>
                                   
                                   
                                    <NavLink to="/chat" className="waves-effect waves-blue btn-flat" >
                                        Send Message to SPOC
                                    </NavLink>
                               </div>
                     </div>
              </div>
          </div>
    

        )
    }
}


const mapStateToProps = (state) => {
    return {
      spocs: state.spocs.spocs,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      addChatMessage: (newMessage) => dispatch(addChatMessage(newMessage))
    }
  }

  

export default connect(mapStateToProps, mapDispatchToProps)(ModalContactSpoc);