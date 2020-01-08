import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import MessageList from '../chatWindow/MessageList';

class ChatInput extends Component {
    render() {

        
        return(
            <div className="row">
            <div className="input-field col l12">
                <textarea id="chat_msg" type="materialize-textarea" data-length="50" />
                <label htmlFor="chat_msg">Write a new message</label>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action">Send
                <i class="material-icons right">send</i>
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