import React, {Component} from 'react';
import {connect} from 'react-redux';
import BarChart_SickCows from '../dataCharts/BarChart_SickCows';
import SCC from '../dataCharts/SCC';
import ModalAddTask from '../../../layout/taskbar/ModalAddTask';
import {fetchUser} from '../../../store/APIactions/fetchUser';
import {bindActionCreators} from 'redux';
import "materialize-css/dist/css/materialize.min.css";
import {Tab, Tabs, Card, Collapsible, CollapsibleItem, Icon} from 'react-materialize';
import { Modal } from 'materialize-css';

class SickCows extends Component {

    componentDidMount() {
        //FETCH_USER
        // TODO implement check whether notification were already fetched before. Refetch just for testing.
        this.props.getUser();
    }

    static processTime(time) {
        return time.split(":")[0] > 12 ? time.split(":")[0] - 12 + ":" + time.split(":")[1] +
            "pm " : time + "am "
    }

    render() {

        const cow_icon = require('../../../assets/img/cow_icon.png');
        const cow_icon2 = require('../../../assets/img/cow_icon2.png');


        const notis = this.props.notifications.notifications;

        const notificationTab = notis ? (
            notis.map(notification => {
                var date = notification.timestamp.split(":")[0].split("-").reverse().join(".");
                var time = notification.timestamp.split(":").slice(1, -1).join(":");
                return (
                    <div>
                        <h5>{date}</h5>
                        <hr/>
                        <Collapsible accordion>
                            <CollapsibleItem
                                expanded={false}
                                header={SickCows.processTime(time) + " - " + notification.title}
                                icon={<Icon>error</Icon>}
                                node="div">

                                <div className="tabs-vertical">
                                        <Tabs className="tabCardContainer">
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
                                                            title={<div id="tabIcon"><p>Id: {cowData.cow_id}</p><img src={cow_icon2} alt="cow_icon"></img> </div>} id="cardTab"
                                                        >
                                                            <Card
                                                                className="card-content black-text"
                                                                title={"Cow ID:" + cowData.cow_id}
                                                            >
                                                                <SCC payload={cowData.scc_data}/>
                                                                <div className="card_btns">
                                                                    <a className="waves-effect waves-light btn treatCow"><i class="material-icons left">send</i>Treat Cow</a>
                                                                
                                                                </div>    
                                                            </Card>
                                                        </Tab>

                                                    )
                                                })
                                            ) : (<p>nope</p>)}

                                        </Tabs>
                                    
                                </div>
                                <ModalAddTask payload={notification}/>
                            </CollapsibleItem>
                        </Collapsible>
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
                        <input type="text" placeholder="Search..." className="searchbar"></input>
                    </div>

                    {notificationTab}

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