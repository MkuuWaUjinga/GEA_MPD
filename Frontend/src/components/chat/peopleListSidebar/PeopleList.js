import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'

class PeopleList extends Component {
    render() {
        
        const {spocs} = this.props;
        const spocList = spocs.length ? (
            spocs.map(spoc => {
              return (
                <div key={spoc.userId}>
                    <div className="row">
                        <div className="col l3">
                            PIC
                        </div>
                        <div className="col l9">
                            <p>{spoc.role}</p>
                            <h6>{spoc.firstName} {spoc.lastName}</h6>
                            <p>Hello World!</p>
                        </div>
                    </div>

                  <hr />
                </div>
              )
            })
        ) :(
          <p>No notifications yet...</p>
        );



        return(
        <div className="">

            <div className="toolbar">
                <div className="row">
                    <div className ="col l4">
                         <i className="material-icons">settings</i>
                    </div>
                    <div className ="col l4">
                         Messenger
                    </div>
                    <div className ="col l4">
                         <i className="material-icons">add_circle_outline</i>
                    </div>
                </div>
                <div className="input-field">
                    <input id="search" type="search" required />
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                </div>
            </div>

            <div className="spocChats">
                {spocList}
            </div>



        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        spocs: state.spocs.spocs
    }
}




export default connect(mapStateToProps)(PeopleList);