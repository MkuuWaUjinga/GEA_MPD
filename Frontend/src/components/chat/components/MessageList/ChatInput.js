import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class ChatInput extends Component {
    render() {

        
        return(
            <div className="row sendMsgToSPOC">
            <div className="input-field col l10">
                <textarea id="chat_msg" type="materialize-textarea" data-length="50" />
                <label htmlFor="chat_msg">Write a new message</label>
            </div>
            <button className="btn waves-effect waves-light green col l2 send_btn" type="submit" name="action">Send
                <i className="material-icons right">send</i>
            </button>
        
           </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        
    }
}


export default connect(mapStateToProps)(ChatInput);