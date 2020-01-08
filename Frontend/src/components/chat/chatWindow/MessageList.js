import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {NavLink} from 'react-router-dom';
import {fetchCowData} from '../../../store/APIactions/fetchCowData'

class MessageList extends Component {



      componentDidMount() {
        
       //Fetch Data From API
        this.props.getCowData();
    }


    render() {
        console.log("I wanna see all cows",this.props);
        const {chat_messages} = this.props;
        const chatMessages = chat_messages? (
        <p>{chat_messages.chatRoomId}</p>
        
        ) : (
            <div className="center">No messages yet...</div>
        );

        const {cows} = this.props;
        console.log("these are the cows", cows)
        const cowList = Object.keys(cows).map(key => {
            return (
            <div value={key}>{cows[key]}</div>
            );
        })

        
        return(
        <div className="">
            <p>hello World - MessageList</p>
            {chatMessages}


            <div>
                CowList:
                {cowList}
            </div>
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        chat_messages: state.chat_messages,
        cows: state.cow_data
    }
}

/*
const mapDispatchToProps = (dispatch) => {
    return {
      getAllCowData: () => dispatch(fetchCowData)
    }
  }

*/
function mapDispatchToProps(dispatch) {
    return {
      getCowData: bindActionCreators(fetchCowData, dispatch)
    }
  }
  


export default connect(mapStateToProps, mapDispatchToProps)(MessageList);