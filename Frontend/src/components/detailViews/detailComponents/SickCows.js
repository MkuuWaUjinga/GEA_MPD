import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Line} from 'react-chartjs-2';
import M from 'materialize-css'; 
import BarChart_SickCows from '../dataCharts/BarChart_SickCows';
import SCC from '../dataCharts/SCC';
import ModalContactSpoc from '../../../layout/contactSPOC/ModalContactSpoc';
import ModalAddTask from '../../../layout/taskbar/ModalAddTask';
import {NavLink} from 'react-router-dom';

class SickCows extends Component {

state = {
    collapsed : false
}

componentDidMount(){

        var elems = document.querySelectorAll('.datepicker');

      const optionsDatePicker = {
        defaultDate: true
    }
    
    
    const optionsCollapsible = {
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
    M.Collapsible.init(this.Collapsible, optionsCollapsible);
    M.Datepicker.init(elems, optionsCollapsible);
}


    render() {

        const cow_icon = require('../../../assets/img/cow_icon.png');

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
                                <div className="card blue lighten-5">
                                    <div className="card-content black-text">
        
                                    <p>Cow-ID: {uniqueCowData.cow_id}</p>
                                    {this.state.collapsed? <SCC payload={uniqueCowData.SCC} />: <p>No Diagram data available</p>}
                                    
                                    </div>
                                    <div className="card-action">
                                    <a  href="#">Put cow under treatment</a>
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
                            <ModalAddTask />
                            <ModalContactSpoc notificationPayload = {notification}/>
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
                <div className="subheadline">
                    <h4>Cows currently in treatment</h4>
                    <input type="text" className="datepicker"/> 
                </div>

                        <BarChart_SickCows />
                        <div className="CowsInTreatment">
                    
                            <ul className="collapsible">
                            <li className="tableHeader">
                                <div className="collapsible-header row center">
                                        <div className="col l2">
                                            
                                        </div>
                                        <div className="col l2">
                                            Cow-ID
                                        </div>
                                        <div className="col l2">
                                            Diagnosis
                                        </div>
                                        <div className="col l2">
                                            Medication
                                        </div>
                                        <div className="col l2">
                                            Start
                                        </div>
                                        <div className="col l2">
                                            Treatment Period
                                        </div>
                                        <div className="col l2">
                                            Due Date
                                        </div>
                                        <div className="col l2">
                                           
                                        </div>
                                </div>
                                </li>
                                <li>
                                <div className="collapsible-header row center">
                                         <div className="col l2">
                                            <img src={cow_icon} alt="cow_icon"></img>
                                        </div>
                                        <div className="col l2">
                                            5689
                                        </div>
                                        <div className="col l2">
                                            Mastitis
                                        </div>
                                        <div className="col l2">
                                            Antibiotics
                                        </div>
                                        <div className="col l2">
                                            01/04/19
                                        </div>
                                        <div className="col l2">
                                            <div className="progress blue-grey lighten-4 tooltipped" data-position="top" data-tooltip="6 Days until end of treatment">
                                                <span>Time Period</span>
                                                <div className="determinate orange lighten-2" style={{width: '75%', animation: 'grow 2s'}}>75%</div>
                                            </div>
                                        </div>
                                        <div className="col l2">
                                            13/04/19
                                        </div>
                                        <div className="col l2">
                                            <i className="large material-icons left">arrow_drop_down</i>
                                        </div>
                                </div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                <div className="collapsible-header row center">
                                        <div className="col l2">
                                            <img src={cow_icon} alt="cow_icon"></img>
                                        </div>
                                        <div className="col l2">
                                            12322
                                        </div>
                                        <div className="col l2">
                                            Claw Disease
                                        </div>
                                        <div className="col l2">
                                            Antibiotics
                                        </div>
                                        <div className="col l2">
                                            23/02/19
                                        </div>
                                        <div className="col l2">
                                            <div className="progress blue-grey lighten-4 tooltipped" data-position="top" data-tooltip="6 Days until end of treatment">
                                                <span>Time Period</span>
                                                <div className="determinate orange lighten-2" style={{width: '56%', animation: 'grow 2s'}}>56%</div>
                                            </div>
                                        </div>
                                        <div className="col l2">
                                            15/05/19
                                        </div>
                                        <div className="col l2">
                                            <i className="large material-icons left">arrow_drop_down</i>
                                        </div>
                                </div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                <div className="collapsible-header row center">
                                        <div className="col l2">
                                            <img src={cow_icon} alt="cow_icon"></img>
                                        </div>
                                        <div className="col l2">
                                        23421
                                        </div>
                                        <div className="col l2">
                                            Mastitis
                                        </div>
                                        <div className="col l2">
                                            Antibiotics
                                        </div>
                                        <div className="col l2">
                                            31/03/19
                                        </div>
                                        <div className="col l2">
                                            <div className="progress blue-grey lighten-4 tooltipped" data-position="top" data-tooltip="6 Days until end of treatment">
                                                <span>Time Period</span>
                                                <div className="determinate orange lighten-2" style={{width: '20%', animation: 'grow 2s'}}>20%</div>
                                            </div>
                                        </div>
                                        <div className="col l2">
                                            25/05/19
                                        </div>
                                        <div className="col l2">
                                            <i className="large material-icons left">arrow_drop_down</i>
                                        </div>
                                </div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                            </ul>
        
                        </div>

                        <div className="NotificationsSomaticCellCount">
                        <div><i className="small material-icons left">notifications</i><h4>Notifcations</h4></div>
                        <div className="notification_timepicker"><input type="text" className="datepicker"/><input type="text" placeholder="Search..." className="searchbar"></input></div>
                            <div>
                                <h5>24th Jan. 2020</h5>
                                <hr />
                                <ul className="collapsible" ref={Collapsible => {
                                    this.Collapsible = Collapsible;
                                }}>
                                {notificationList}

                                </ul>
                            </div>
                            
                            <div>
                            <h5>23th Jan. 2020</h5>
                            <hr />
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