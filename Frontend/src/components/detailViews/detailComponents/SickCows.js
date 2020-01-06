import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Line} from 'react-chartjs-2';
import M from 'materialize-css'; 
import BarChart_SickCows from '../dataCharts/BarChart_SickCows'
import SCC from '../dataCharts/SCC'
import ModalContactSpoc from '../../../layout/contactSPOC/ModalContactSpoc'
class SickCows extends Component {

state = {
    collapsed : false
}

componentDidMount(){
    
    const options = {
        onOpenStart: () => {
            setTimeout(function() {
                this.setState({collapsed: true});
                console.log("Open Start-1", this.state.collapsed);

            }.bind(this),100);
        },

        onCloseEnd: () => {
                this.setState({collapsed: false});
                console.log("collapsed state_END", this.state.collapsed)
        },
    }
    M.Collapsible.init(this.Collapsible, options);
}


    render() {


        const {notifications} = this.props;
        const notificationList = notifications.length ? (
            notifications.map(notification => {
              return (

                <li key={notification.id}>
                <div className="collapsible-header">
                    <div className="row">
                        <div className="col l12">
                        <i className="large material-icons left">account_circle</i>
                        <h6>{notification.time} - {notification.title}</h6>
                        </div>
                        <div className="col l12">
                                <p>{notification.content}</p>
                                
                        </div>
                        </div>
                            
                </div>
                <div className="collapsible-body">
                <div className="row">
                
                {
                    notification.cows.length ? (
                        notification.cows.map(uniqueCowData => {
                            return (
                            <div className="col l12" key={uniqueCowData.cow_id}>
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
        
                                    <p>Cow-ID: {uniqueCowData.cow_id}</p>
                                    {this.state.collapsed? <SCC payload={uniqueCowData.SCC} />: <p>No Diagram data available</p>}
                                    
                                    </div>
                                    <div className="card-action">
                                    <a href="#">Put cow under treatment</a>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    ) : (<p>No Cow data available</p>)
                }




                <div className ="col l12">

                        <hr />
                        <div className="right">
                            <a className="waves-effect waves-light btn">Create New Task</a>
                            <ModalContactSpoc />
                        </div>

                </div>
                </div>
                </div>
                </li>
                






              )
            })
        ) :(
          <p>No notifications yet...</p>
        );



        return(
            <div className="SomaticCellCountContainer">
                        <BarChart_SickCows />

                    
                        <div className="CowsInTreatment">
                            <h4>Cows currently under treatment</h4>
                            <div className="row center black-text">
                                <div className="col l2">Cow</div>
                                <div className="col l2">Somatic Cell Count</div>
                                <div className="col l2">Medication</div>
                                <div className="col l2">Start</div>
                                <div className="col l2">Treatment Period</div>
                                <div className="col l2">Due Date</div>
                            </div>
                            <ul className="collapsible">
                                <li>
                                <div className="collapsible-header row center">
                                        <div className="col l2">
                                            Cow-ID 5689
                                        </div>
                                        <div className="col l2">
                                            35132345
                                        </div>
                                        <div className="col l2">
                                            #Medication
                                        </div>
                                        <div className="col l2">
                                            01/04/19
                                        </div>
                                        <div className="col l2">
                                            (========--)
                                        </div>
                                        <div className="col l2">
                                            13/04/19
                                        </div>
                                </div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                <div className="collapsible-header row center">
                                        <div className="col l2">
                                            Cow-ID 12322
                                        </div>
                                        <div className="col l2">
                                            15325345
                                        </div>
                                        <div className="col l2">
                                            #Medication
                                        </div>
                                        <div className="col l2">
                                            23/02/19
                                        </div>
                                        <div className="col l2">
                                            (====-------)
                                        </div>
                                        <div className="col l2">
                                            15/05/19
                                        </div>
                                </div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                <div className="collapsible-header row center">
                                        <div className="col l2">
                                            Cow-ID 23421
                                        </div>
                                        <div className="col l2">
                                            23514322
                                        </div>
                                        <div className="col l2">
                                            #Medication
                                        </div>
                                        <div className="col l2">
                                            31/03/19
                                        </div>
                                        <div className="col l2">
                                            (==----------)
                                        </div>
                                        <div className="col l2">
                                            25/05/19
                                        </div>
                                </div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                            </ul>
        
                        </div>

                        <div className="NotificationsSomaticCellCount">
                            <h4>Notifcations</h4>

                            <div>
                                <h5>Today</h5>
                                <ul className="collapsible" ref={Collapsible => {
                                    this.Collapsible = Collapsible;
                                }}>
                                {notificationList}

                                </ul>
                            </div>
                            <hr />
                            <div>
                                <h5>23/10/19</h5>
                                <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header">
                                        <div className="row">
                                            <div className="col l12">
                                            <i className="large material-icons left">account_circle</i>
                                            <h6>14:24 - Cow behaved unusual</h6>
                                            </div>
                                            <div className="col l12">
                                                    <p>Notification Details: blasdfbaksdbfkadsfkjdsf
                                                    </p>
                                            </div>
                                            </div>
                                                
                                    </div>
                                <div className="collapsible-body">
                                <div className="row">
                                    <div className="col l12">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                    
                                        <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                        <a href="#">Put cow under treatment</a>
                                        </div>
                                    </div>
                                    </div>

                                  
                                    <div className ="col l12">

                                        <hr />
                                        <div className="right">
                                    <a className="waves-effect waves-light btn">Create New Task</a>
                                    <a className="waves-effect waves-light btn">Forward to SPOC</a>
                                    </div>

                                    </div>
                                </div>
                                </div>
                                </li>

                                <li>
                                    <div className="collapsible-header">
                                        <div className="row">
                                            <div className="col l12">
                                            <i className="large material-icons left">account_circle</i>
                                            <h6>10:11 - Cow #1234 is sick</h6>
                                            </div>
                                            <div className="col l12">
                                                    <p>Notification Details: blasdfbaksdbfkadsfkjdadsf dsf dsf esdafdfsadf sf
                                                    </p>
                                            </div>
                                            </div>
                                                
                                    </div>
                                <div className="collapsible-body">
                                <div className="row">
                                    <div className="col l12">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                    
                                        <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                        <a href="#">Put cow under treatment</a>
                                        </div>
                                    </div>
                                    </div>

                                  
                                    <div className ="col l12">

                                        <hr />
                                        <div className="right">
                                    <a className="waves-effect waves-light btn">Create New Task</a>
                                    <a className="waves-effect waves-light btn">Forward to SPOC</a>
                                    </div>

                                    </div>
                                </div>
                                </div>
                                </li>

                            </ul>

                            </div>
                        </div>

            </div>



        )
    }
}

const mapStateToProps = (state) => {
    return {
        notifications: state.notification.notifications

    }
}

export default connect(mapStateToProps)(SickCows);