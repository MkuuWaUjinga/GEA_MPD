import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class MessageList extends Component {
    render() {

        const {chat_messages} = this.props;
        const chatMessages = chat_messages? (
        <p>{chat_messages.chatRoomId}</p>
        
        ) : (
            <div className="center">No messages yet...</div>
        );

        
        return(
        <div className="">
            <p>hello World - MessageList</p>
            {chatMessages}
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        chat_messages: state.chat_messages,
    }
}


export default connect(mapStateToProps)(MessageList);