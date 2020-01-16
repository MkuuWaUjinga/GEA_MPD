import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {NavLink} from 'react-router-dom';
import {fetchUser} from '../../../store/APIactions/fetchUser'
import {fetchTasks} from '../../../store/APIactions/fetchTasks'


class MessageList extends Component {

      componentDidMount() {
          this.props.getUser();
          this.props.getTasks();
    }


    render() {

        console.log("these are the spocs", this.props.spocs);
        console.log("these are the notifications", this.props.notifications);
        console.log("these are the users", this.props.user);
        console.log("these are the tasks", this.props.tasks);


        return(
        <div className="">
            <p>hello World - MessageList</p>
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        chat_messages: state.chat_messages,
        cows: state.cow_data,
        spocs: state.spocs,
        notifications: state.notifications,
        user: state.user,
        tasks: state.tasks
    }
};

/*
const mapDispatchToProps = (dispatch) => {
    return {
      getAllCowData: () => dispatch(fetchCowData)
    }
  }

*/
function mapDispatchToProps(dispatch) {
    return {
      getUser: bindActionCreators(fetchUser, dispatch),
      getTasks: bindActionCreators(fetchTasks, dispatch)
    }
  }
  


export default connect(mapStateToProps, mapDispatchToProps)(MessageList);