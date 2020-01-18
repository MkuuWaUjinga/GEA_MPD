import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs-2';
import M from 'materialize-css';

import BarChart_SickCows from '../dataCharts/BarChart_SickCows';
import SCC from '../dataCharts/SCC';
import ModalContactSpoc from '../../../layout/contactSPOC/ModalContactSpoc';
import ModalAddTask from '../../../layout/taskbar/ModalAddTask';
import {fetchUser} from '../../../store/APIactions/fetchUser';
import {bindActionCreators} from 'redux';
import "materialize-css/dist/css/materialize.min.css";
import {NavLink} from 'react-router-dom';
import {Tab, Tabs, Card} from 'react-materialize';

class SickCows extends Component {

    state = {
        collapsed: false
    }

    componentDidMount() {
        //FETCH_USER
        // TODO implement check whether notification were already fetched before. Refetch just for testing.
        this.props.getUser();


        var elems = document.querySelectorAll('.datepicker');

        const optionsDatePicker = {
            defaultDate: true
        }


        const optionsCollapsible = {
            onOpenStart: () => {
                setTimeout(function () {
                    this.setState({collapsed: true});
                    console.log("Open Start-1", this.state.collapsed);

                }.bind(this), 100);
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


        const notis = this.props.notifications.notifications;
        console.log("NOTIS", notis)

        const notificationTab = notis ? (
            notis.map(notification => {
                return (
                    <div className="tabs-vertical">
                        <div className="col s4 m3 l2">
                            <Tabs>
                                {notification.proof ? (
                                    notification.proof.map(cowData => {
                                        return (
                                            <Tab
                                                options={{
                                                    duration: 300,
                                                    onShow: null,
                                                    responsiveThreshold: Infinity,
                                                    swipeable: false
                                                }}
                                                title={cowData.cow_id}
                                            >
                                                <Card
                                                    actions={[
                                                        <a key="1" href="#">This is a link</a>,
                                                        <a key="2" href="#">This is a link</a>
                                                    ]}
                                                    className="blue-grey darken-1"
                                                    closeIcon={<Icon>close</Icon>}
                                                    revealIcon={<Icon>more_vert</Icon>}
                                                    textClassName="white-text"
                                                    title="Card title"
                                                >
                                                    I am a very simple card.
                                                </Card>
                                                <Card>
                                                    <div className="card-content black-text">

                                                        <p>Cow-ID: {cowData.cow_id}</p>
                                                        {this.state.collapsed ?
                                                            <div><SCC payload={cowData.scc_data}/> <p>ye works</p>
                                                            </div> : <p>No Diagram data available</p>}

                                                    </div>
                                                </Card>

                                            </Tab>
                                        )
                                    })
                                ) : (<p>nope</p>)}

                            </Tabs>
                            <ul className="tabs">
                                <li className="tab" style={{display: "none"}}>
                                    <a className="waves-effect waves-cyan" href="#cow1"><i className="zmdi zmdi-apps"></i>loool</a>
                                </li>
                                {notification.proof ? (
                                    notification.proof.map(cowData => {
                                        return (
                                            <li className="tab" key={cowData.cow_id}>
                                                <a className="waves-effect waves-cyan" href={"#" + cowData.cow_id}><i
                                                    className="zmdi zmdi-apps"></i>{cowData.cow_id}
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
                                    <div className="col l12">
                                        <div id={cowData.cow_id} className="tab-content">{cowData.notification_title}
                                            <div className="row">
                                                <div className="col l12" key={cowData.cow_id}>
                                                    <div className="card blue lighten-5">
                                                        <div className="card-content black-text">

                                                            <p>Cow-ID: {cowData.cow_id}</p>
                                                            {this.state.collapsed ?
                                                                <div><SCC payload={cowData.scc_data}/> <p>ye works</p>
                                                                </div> : <p>No Diagram data available</p>}

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

        return (
            <div className="SomaticCellCountContainer">
                <div className="subheadline">
                    <h4>Cows currently in treatment</h4>
                    <input type="text" className="datepicker" defaultValue='24.01.2020'/>
                </div>

                <BarChart_SickCows/>
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
                                    <div className="progress blue-grey lighten-4 tooltipped" data-position="top"
                                         data-tooltip="6 Days until end of treatment">
                                        <span>Time Period</span>
                                        <div className="determinate orange lighten-2"
                                             style={{width: '75%', animation: 'grow 2s'}}>75%
                                        </div>
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
                                    <div className="progress blue-grey lighten-4 tooltipped" data-position="top"
                                         data-tooltip="6 Days until end of treatment">
                                        <span>Time Period</span>
                                        <div className="determinate orange lighten-2"
                                             style={{width: '56%', animation: 'grow 2s'}}>56%
                                        </div>
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
                                    <div className="progress blue-grey lighten-4 tooltipped" data-position="top"
                                         data-tooltip="6 Days until end of treatment">
                                        <span>Time Period</span>
                                        <div className="determinate orange lighten-2"
                                             style={{width: '20%', animation: 'grow 2s'}}>20%
                                        </div>
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
                        <input type="text" value="17. Jan 20 - Today, 24 Jan 20" className="datepicker"/>
                        <input type="text" placeholder="Search..." className="searchbar"></input>
                    </div>


                    <div>
                        <h5>24th Jan. 2020</h5>
                        <hr/>
                        <ul className="collapsible" ref={Collapsible => {
                            this.Collapsible = Collapsible;
                        }}>
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

                                        </div>
                                    </div>
                                </div>


                            </li>

                        </ul>
                    </div>

                    <ul className="pagination">
                        <li><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                        <li className="active"><a href="#!">1</a></li>
                        <li><a href="#!">2</a></li>
                        <li><a href="#!">3</a></li>
                        <li><a href="#!">4</a></li>
                        <li><a href="#!">5</a></li>
                        <li><a href="#!"><i className="material-icons">chevron_right</i></a></li>
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