import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarChart_SickCows from '../dataCharts/BarChart_SickCows';
import SCC from '../dataCharts/SCC';
import ModalAddTask from '../../../layout/modalAddTask/ModalAddTask';
import { fetchUser } from '../../../store/APIactions/fetchUser';
import { bindActionCreators } from 'redux';
import "materialize-css/dist/css/materialize.min.css";
import { Tab, Tabs, Card, Collapsible, CollapsibleItem, Icon } from 'react-materialize';
import M from 'materialize-css';


class SickCows extends Component {

    state = {
        treated_cows: [
            {
                cow_id: "25",
                disease: "Mastitis",
                medication: "Cobactan",
                start_treatment: "12/01/20",
                end_treatment: "28/01/20",
                description: "medical record"
            },
        ]
    }

    componentDidMount() {
        //FETCH_USER
        this.props.getUser();

        const options = {
            onOpenStart: () => {
                console.log("Open Start");
            },
            onOpenEnd: () => {
                console.log("Open End");
            },
            onCloseStart: () => {
                console.log("Close Start");
            },
            onCloseEnd: () => {
                console.log("Close End");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%"
        };
        M.Modal.init(this.Modal, options);

    }

    static processTime(time) {
        return time.split(":")[0] > 12 ? time.split(":")[0] - 12 + ":" + time.split(":")[1] +
            "pm " : time + "am "
    }

    handleTaskFormChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log("current state", this.state)
    }

    handleTaskFormSubmit = (e) => {
        e.preventDefault();
        console.log('CURRENT STATE', this.state)
        this.setState({
            treated_cows: [...this.state,
            {
                cow_id: "test",
                disease: this.state.disease,
                medication: this.state.medication,
                start_treatment: "test",
                end_treatment: "test2",
                description: this.state.description
            }
            ]
        });
        console.log("current state", this.state)
    }


    render() {

        const cow_icon = require('../../../assets/img/cow_icon.png');
        const cow_icon2 = require('../../../assets/img/cow_icon2.png');


        const treated_cows = this.state.treated_cows;
        const treated_cows_list = treated_cows ? (
            treated_cows.map(cow => {
                return (


                    <li>
                        <div className="collapsible-header row center">
                            <div className="col l2">
                                <img src={cow_icon} alt="cow_icon"></img>
                            </div>
                            <div className="col l2">
                                {cow.cow_id}
                            </div>
                            <div className="col l2">
                                {cow.disease}
                            </div>
                            <div className="col l2">
                                {cow.medication}
                            </div>
                            <div className="col l2">
                                {cow.start_treatment}
                            </div>
                            <div className="col l2">
                                <div className="progress blue-grey lighten-4 tooltipped" data-position="top"
                                    data-tooltip="16 Days until end of treatment">
                                    <span>Time Period</span>
                                    <div className="determinate orange lighten-2"
                                        style={{ width: '65%', animation: 'grow 2s' }}>75%
                                </div>
                                </div>
                            </div>
                            <div className="col l2">
                                {cow.end_treatment}
                            </div>
                            <div className="col l2">
                                <i className="large material-icons left">arrow_drop_down</i>
                            </div>
                        </div>
                        <div className="collapsible-body"><span>{cow.description}.</span></div>
                    </li>)
            })
        ) : (<p>no cows in treatment</p>);

        const notis = this.props.notifications.notifications;
        const notificationTab = notis ? (
            notis.map(notification => {
                var date = notification.timestamp.split(":")[0].split("-").reverse().join(".");
                var time = notification.timestamp.split(":").slice(1, -1).join(":");
                return (
                    <div key="notification-section">
                        <h5>{date}</h5>
                        <hr />
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
                                                    <Tab key={cowData.cow_id}
                                                        options={{
                                                            duration: 300,
                                                            onShow: null,
                                                            responsiveThreshold: Infinity,
                                                            swipeable: false
                                                        }}
                                                        title={<div id="tabIcon"><p>Id: {cowData.cow_id}</p><img src={cow_icon2} alt="cow_icon"></img> </div>} id="cardTab"
                                                    >
                                                        <Card
                                                            className="card-content note black-text"
                                                            title={"High Somatic Cell Count detected for Cow-ID: " + cowData.cow_id}
                                                        >

                                                            <SCC payload={cowData.scc_data} />
                                                            <div className="medicalRecord"><p>Medical Record</p>

                                                                <ul >
                                                                    {cowData.medical_record ? (
                                                                        cowData.medical_record.map(record => {
                                                                            return (
                                                                                <li>
                                                                                    <div >
                                                                                        {record.date} - {record.case}
                                                                                    </div>
                                                                                </li>
                                                                            )
                                                                        })

                                                                    ) : null}
                                                                </ul>
                                                            </div>
                                                            <div className="card_btns">
                                                                <a className="waves-effect waves-light btn treatCow" >Treat Cow</a>

                                                            </div>
                                                        </Card>
                                                    </Tab>

                                                )
                                            })
                                        ) : (<p>nope</p>)}

                                    </Tabs>

                                </div>
                                <ModalAddTask payload={notification} />
                            </CollapsibleItem>
                        </Collapsible>
                    </div>
                )
            })


        ) : (<p>No notifications yet...</p>);

        return (
            <div className="SomaticCellCountContainer">

                <div className="NotificationsSomaticCellCount">

                    <div className="notiSCCheadline">
                        <i className="small material-icons left">notifications</i>
                        <h4>Notifcations</h4>
                    </div>
                    <div className="notiSCCheadlineSearch">
                        <input type="text" placeholder="Search..." className="searchbar"></input>
                    </div>

                    {notificationTab}
                </div>

                <div className="subheadline">
                    <h4>Cows currently in treatment</h4>
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
                                    12
                                </div>
                                <div className="col l2">
                                    Mastitis
                                </div>
                                <div className="col l2">
                                    Penicillin
                                </div>
                                <div className="col l2">
                                    14/01/20
                                </div>
                                <div className="col l2">
                                    <div className="progress blue-grey lighten-4 tooltipped" data-position="top"
                                        data-tooltip="12 Days until end of treatment">
                                        <span>Time Period</span>
                                        <div className="determinate orange lighten-2"
                                            style={{ width: '75%', animation: 'grow 2s' }}>75%
                                        </div>
                                    </div>
                                </div>
                                <div className="col l2">
                                    26/01/20
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
                                    22
                                </div>
                                <div className="col l2">
                                    Claw Disease
                                </div>
                                <div className="col l2">
                                    -
                                </div>
                                <div className="col l2">
                                    14/01/20
                                </div>
                                <div className="col l2">
                                    <div className="progress blue-grey lighten-4 tooltipped" data-position="top"
                                        data-tooltip="13 Days until end of treatment">
                                        <span>Time Period</span>
                                        <div className="determinate orange lighten-2"
                                            style={{ width: '70%', animation: 'grow 2s' }}>56%
                                        </div>
                                    </div>
                                </div>
                                <div className="col l2">
                                    27/01/20
                                </div>
                                <div className="col l2">
                                    <i className="large material-icons left">arrow_drop_down</i>
                                </div>
                            </div>
                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                        </li>

                        {treated_cows_list}
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