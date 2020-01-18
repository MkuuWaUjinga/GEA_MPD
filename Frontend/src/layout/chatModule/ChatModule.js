import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import M from 'materialize-css';  
import "materialize-css/dist/css/materialize.min.css";
import "./Chat.css";


class ChatModule extends Component {
    state = {
      }

componentDidMount() {
     console.log("in Chat Module ",this.props)
}




    render() {



        return(

            <div className="chatModule">
                <p>hello world</p>
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
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ChatModule);