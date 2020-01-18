import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import M from 'materialize-css';
import BarChart_SickCows from '../dataCharts/BarChart_SickCows';
import SCC from '../dataCharts/SCC';
import ModalContactSpoc from '../../../layout/contactSPOC/ModalContactSpoc';
import ModalAddTask from '../../../layout/taskbar/ModalAddTask';
import { fetchUser } from '../../../store/APIactions/fetchUser';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

class SickCows extends Component {

    state = {
        collapsed: false
    }

    componentDidMount() {
        //FETCH_USER
        this.props.getUser();


        var elems = document.querySelectorAll('.datepicker');

        const optionsDatePicker = {
            defaultDate: true
        }


        const optionsCollapsible = {
            onOpenStart: () => {
                setTimeout(function () {
                    this.setState({ collapsed: true });
                    console.log("Open Start-1", this.state.collapsed);

                }.bind(this), 100);
            },

            onCloseEnd: () => {
                this.setState({ collapsed: false });
                console.log("collapsed state_END", this.state.collapsed)
            },
        }
        M.Collapsible.init(this.Collapsible, optionsCollapsible);
        M.Datepicker.init(elems, optionsCollapsible);
    }


    render() {

        const cow_icon = require('../../../assets/img/cow_icon.png');



        const notis = this.props.notifications.notifications;
        console.log("NOTIS", notis)

        const notificationTab = notis ? (
            notis.map(notification => {
                return (
                    <div className="tabs-vertical ">
                        <div className="col s4 m3 l2">
                            <ul class="tabs">

                                <li className="tab" style={{ display: "none" }}>
                                    <a className="waves-effect waves-cyan" href="#cow1"><i className="zmdi zmdi-apps"></i>loool</a>
                                </li>

                                {notification.proof ? (
                                    notification.proof.map(cowData => {
                                        return (
                                            <li className="tab">
                                                <a className="waves-effect waves-cyan" href={"#" + cowData.cow_id}><i className="zmdi zmdi-apps"></i>{cowData.cow_id}



                                                </a>
                                            </li>
                                        )
                                    })
                                ) : (<p>nope</p>)}



                            </ul>
                        </div>



                        {notification.proof ? (
                            notification.proof.map(cowData => {
                                return (
                                    <div class="col l12">
                                        <div id={cowData.cow_id} className="tab-content">{cowData.notification_title}
                                            <div className="row">
                                                <div className="col l12" key={cowData.cow_id}>
                                                    <div className="card blue lighten-5">
                                                        <div className="card-content black-text">

                                                            <p>Cow-ID: {cowData.cow_id}</p>
                                                            {this.state.collapsed ? <div> <SCC payload={cowData.scc_data} /> <p>ye works</p> </div> : <p>No Diagram data available</p>}

                                                        </div>
                                                        <div className="card-action">
                                                            <a href="#">Put cow under treatment</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        ) : (<p>nope</p>)}


                    </div>


                )
            })


        ) : (<p>No notifications yet...</p>);


        /* _____________________________________________*/

        const notificationList = notis ? (
            notis.map(notification => {
                return (

                    <li key={notification.id}>
                        <div className="collapsible-header">
                            <div className="row">
                                <div className="col l12">
                                    <h6>{notification.timestamp} - {notification.title}</h6>
                                </div>
                                {/* 
                                    <div className="noti_msg col l12">
                                        <p><i className="material-icons">error</i>{notification.content}</p>
                                    </div>
                                */}
                                <div className="alarm_msg col l12">
                                    <i className="material-icons">error</i>
                                    <p>{notification.escalation_status}</p>
                                </div>
                            </div>

                        </div>
                        <div className="collapsible-body">
                            <div className="row">
                                {
                                    notification.proof ? (
                                        notification.proof.map(uniqueCowData => {
                                            return (
                                                <div className="col l12" key={uniqueCowData.cow_id}>
                                                    <div className="card blue lighten-5">
                                                        <div className="card-content black-text">

                                                            <p>Cow-ID: {uniqueCowData.cow_id}</p>
                                                            {this.state.collapsed ? <SCC payload={uniqueCowData.scc_data} /> : <p>No Diagram data available</p>}

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


                                <div className="col l12">

                                    <hr />
                                    <div className="right">
                                        <ModalAddTask />
                                        <ModalContactSpoc notificationPayload={notification} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </li>

                )
            })
        ) : (
                <p>No notifications yet...</p>
            );



        return (
            <div className="SomaticCellCountContainer">
                <div className="subheadline">
                    <h4>Cows currently in treatment</h4>
                    <input type="text" className="datepicker" defaultValue='24.01.2020' />
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
                                        <div className="determinate orange lighten-2" style={{ width: '75%', animation: 'grow 2s' }}>75%</div>
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
                                        <div className="determinate orange lighten-2" style={{ width: '56%', animation: 'grow 2s' }}>56%</div>
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
                                        <div className="determinate orange lighten-2" style={{ width: '20%', animation: 'grow 2s' }}>20%</div>
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

                    <div className="notiSCCheadline">
                        <i className="small material-icons left">notifications</i>
                        <h4>Notifcations</h4>
                    </div>
                    <div className="notiSCCheadlineSearch">
                        <input type="text" value="17. Jan 20 - Today, 24 Jan 20" className="datepicker" />
                        <input type="text" placeholder="Search..." className="searchbar" ></input>
                    </div>


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
                                            <h6>14:24 - Cow behaved unusual</h6>
                                        </div>
                                        <div className="alarm_msg col l12">
                                            <i className="material-icons">error</i>
                                            <p>alarmmmmm</p>
                                            <p>{console.log("HIER", this.props.notifications.notifications), this.props.notifications.notifications.length ? "lol" : "...not working"}
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


                                        <div className="col l12">

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
                                            <h6>10:11 - Cow #1234 is sick</h6>
                                        </div>
                                        <div className="alarm_msg col l12">
                                            <i className="material-icons">error</i>
                                            <p>alarmmmmm</p>
                                        </div>
                                    </div>

                                </div>


                                <div className="collapsible-body">
                                    <div className="row">
                                        <div className="col l12">


                                            {notificationTab}
                                            {/*AB HIER TAB ersetzen 
                                            
                                            <div class="tabs-vertical ">
                                                <div class="col s4 m3 l2">
                                                    <ul class="tabs">
                                                        {/* 
                                                    {
                                                        this.props.notifications.notifications ? (
                                                        
                                                            this.props.notifications.notifications.proof.map(uniqueCowData => {
                                                                return (
                                                                    
                                                                    <li class="tab">
                                                                        <a class="waves-effect waves-cyan" href={uniqueCowData.cow_id}><i class="zmdi zmdi-apps"></i>{uniqueCowData.cow_id}</a>
                                                                    </li>
                                                                )
                                                            })
                                                        )
                                                     : (<p>no cow data</p>)
                                                    
                                                    }
                                            
                                                        <li class="tab">
                                                            <a class="waves-effect waves-cyan" href="cow1"><i class="zmdi zmdi-apps"></i>loool</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col s8 m9 l6">
                                                    <div id="cow1" class="tab-content">lol1</div>
                                                    <div id="cow2" class="tab-content">adhsfasdf</div>
                                                    <div id="cow3" class="tab-content">dsfkjsf</div>
                                                    <div id="cow4" class="tab-content">adhsfasdf</div>
                                                    <div id="cow5" class="tab-content">dsfkjsf</div>
                                                </div>
                                            </div>

                                            BIS HIER TAB ersetzen */}


                                        </div>
                                    </div>
                                </div>








                            </li>

                        </ul>

                    </div>


                    <ul className="pagination">
                        <li ><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                        <li className="active"><a href="#!">1</a></li>
                        <li ><a href="#!">2</a></li>
                        <li ><a href="#!">3</a></li>
                        <li ><a href="#!">4</a></li>
                        <li ><a href="#!">5</a></li>
                        <li ><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                    </ul>
                </div>



            </div>



        )
    }
}

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications

    }
}
function mapDispatchToProps(dispatch) {
    return {
        getUser: bindActionCreators(fetchUser, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SickCows);