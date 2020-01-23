import React, {Component} from 'react';
import Taskbar from '../../layout/taskbar/Taskbar'
import ConceptionRate from '../detailViews/detailComponents/ConceptionRate'
import HerdCount from '../detailViews/detailComponents/HerdCount'
import SomaticCellCountView from './detailComponents/SickCows'
import HerdIncrease from '../detailViews/detailComponents/HerdIncrease'
import Lactation from '../detailViews/detailComponents/Lactation'
import {connect} from 'react-redux';
import {toggleNotification} from "../../store/actions/toggleNotification";
import moment from 'moment';
import '../detailViews/herdoverview.css'
import {NavLink} from 'react-router-dom';

class DetailHerdOverview extends Component {

    state = {
        displayedComponent: ""
    }


    constructor(props) {

        super(props);

    }

    handleNotificationClosing = () => {
        if (this.props.isActive === true) {
            this.props.toggleNotification(false)
        } 
    }

    componentDidMount() {
        /*
        console.log("In degail herd:", this.props.location.aboutProps.link_id)
        this.handleSwitch(this.props.location.aboutProps.link_id);
        */
        this.handleSwitch('SICK_COWS');
        this.handleNotificationClosing();
    }


    handleSwitch = (componentName) => {
        this.setState({displayedComponent: componentName});
    }

    renderComponent() {
        switch (this.state.displayedComponent) {
            case "HERD_COUNT":
                return <HerdCount/>
            case "LACTATION":
                return <Lactation/>
            case "SICK_COWS":
                return <SomaticCellCountView/>
            case "CONCEPTION_RATE":
                return <ConceptionRate/>
            case "HERD_INCREASE":
                return <HerdIncrease/>
        }
    }

    render() {


        return (

            <div className="main_detail_dashboard row">
                <div className="detailviews col xl9">
                    {/*<span className="sectionHeadline"><NavLink to="/"> <i className="small material-icons left">chevron_left</i> Main Dashboard</NavLink> </span> */}

                    <h2 className="sectionHeadline center">Herd Overview</h2>
                    <span className="sectionHeadline"><NavLink to="/"> <i
                        className="small material-icons left">chevron_left</i></NavLink> </span>

                    <div className="herd_overview_nav">
                        <div
                            className={this.state.displayedComponent === "HERD_COUNT" ? 'ho_nav_block active' : 'ho_nav_block'}
                            onClick={() => this.handleSwitch("HERD_COUNT")}>
                            <p>Total Herd Count</p>
                            <p className="KPIdigit">116</p>
                            <p className="kpi_timestamp">{moment().format("ddd D, h:mm")} </p>
                        </div>
                        <div
                            className={this.state.displayedComponent === "LACTATION" ? 'ho_nav_block active' : 'ho_nav_block'}
                            onClick={() => this.handleSwitch("LACTATION")}>
                            <p>Lactating Animals</p>
                            <p className="KPIdigit">86</p>
                            <p className="kpi_timestamp">{moment().format("ddd D, h:mm")} </p>
                        </div>
                        <div
                            className={this.state.displayedComponent === "SICK_COWS" ? 'ho_nav_block active' : 'ho_nav_block'}
                            onClick={() => this.handleSwitch("SICK_COWS")}>
                            <p>Sick cows (Mastitis)</p>
                            <p className="KPIdigit">3</p>
                            <p className="kpi_timestamp">{moment().format("ddd D, h:mm")} </p>
                        </div>
                        <div
                            className={this.state.displayedComponent === "CONCEPTION_RATE" ? 'ho_nav_block active' : 'ho_nav_block'}
                            onClick={() => this.handleSwitch("CONCEPTION_RATE")}>
                            <p>Conception Rate (%)</p>
                            <p className="KPIdigit">40</p>
                            <p className="kpi_timestamp">{moment().format("ddd D, h:mm")} </p>
                        </div>
                        <div
                            className={this.state.displayedComponent === "HERD_INCREASE" ? 'ho_nav_block active' : 'ho_nav_block'}
                            onClick={() => this.handleSwitch("HERD_INCREASE")}>
                            <p>In/-Decrease Herd</p>
                            <p className="KPIdigit">-1.1</p>
                            <p className="kpi_timestamp">{moment().format("ddd D, h:mm")} </p>
                        </div>
                    </div>


                    {this.renderComponent()}


                </div>

                <Taskbar/>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        isActive: state.notifications.isActive,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleNotification: (newStatus) => dispatch(toggleNotification(newStatus))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DetailHerdOverview);