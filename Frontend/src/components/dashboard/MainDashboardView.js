import React, {Component} from 'react';
import ListHerdMgmt from './dashboardLayouts/ListHerdMgmt';
import Taskbar from '../../../src/layout/taskbar/Taskbar'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import './dashboard.css';
import {weatherIcon} from '../../assets/img/weatherIcon.png';
import {fetchUser} from '../../store/APIactions/fetchUser';
import { bindActionCreators } from 'redux';
import moment from 'moment';


class MainDashboardView extends Component {

    componentDidMount () {
            //FETCH_USER
            this.props.getUser();
    }



    render() {
        const {notifications} = this.props.notifications;
        const weatherIcon = require('../../assets/img/weatherIcon.png');
        return(
            <div className="main_dashboard container row">

        <div className="timeframe_box">
                
                    <div className="time_block">
                        <p>Today</p>
                    </div>
                    <div className="time_block">
                        <p>Week</p>
                    </div> 
                    <div className="time_block">
                        <p>Month</p>
                    </div> 
                    <div className="time_block">
                        <p>Quarter</p>
                    </div> 
                    <div className="time_block">
                        <p>Year</p>
                    </div> 
            </div>    
                
            <div className="business_kpis">
                    <div className="kpi_block">
                        <p>Date</p>
                        <p>{moment().format("MMM Do YYYY")} </p>
                        <i className="material-icons">more_vert</i>
                    </div> 
                    <div className="kpi_block">
                        <p>Time</p>
                        <p>{moment().format('LT')}</p>
                        <i className="material-icons">more_vert</i>
                    </div> 
                    <div className="kpi_block">
                        <p>Weather</p>
                        <span><img src={weatherIcon} alt="weather icon"></img>
                        <p>Rainy</p></span>
                        <i className="material-icons">more_vert</i>
                    </div> 
                    <div className="kpi_block">
                        <p>Temperature</p>
                        <p>4°C</p>
                        <i className="material-icons">more_vert</i>
                    </div> 
                    <div className="kpi_block">
                        <p>Estimated outcome</p>
                        <p>€ 14.210</p>
                        <i className="material-icons">more_vert</i>
                    </div> 
            </div>

                <div className="kpi_boards col xl9">
                    <div className="row">
                        <div className="kpi_milkperfbox col xl6">
                                <div className="card z-depth-3">
                                    <div className="row">
                                        <div className="col l9 ">
                                            <div className="box_icon valign-wrapper center-align">
                                                <i className="material-icons">assessment</i>
                                            </div>
                                            <h5 >Milking Performance</h5>
                                            <div className="kpiDiagram milking_performance_container">

                                            </div>
                                        </div>
                                        <div className="col l3 kpiValues">
                                            <ul>
                                                <li>
                                                    <div className="keyValue">
                                                        <p>Milking Output (kg)</p>
                                                        <p className="KPIdigit">42335</p>
                                                        <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                    </div>
                                                </li>
                                                <hr></hr>
                                                <li>
                                                    <div className="keyValue">
                                                        <p># Milkings</p>
                                                        <p className="KPIdigit">75</p>
                                                        <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                    </div>
                                                </li>
                                                <hr></hr>
                                                <li>
                                                    <div className="keyValue">
                                                        <p> &empty; Milking time (min)</p>
                                                        <p className="KPIdigit">6</p>
                                                        <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>



                        <div className="kpi_milkqualbox col xl6">
                            <div className="card">
                                    <div className="row">
                                        <div className="col l9 kpiDiagram">
                                            <div className="box_icon valign-wrapper">
                                                <i className="material-icons">assignment</i>
                                            </div>
                                            <h5 >Milking Quality</h5>
                                            <div className="kpiDiagram milk_quality_container">

                                            </div>
                                        </div>
                                        <div className="col l3 kpiValues">
                                            <ul>
                                                <li>
                                                    <div className="keyValue">
                                                        <p>Fat (%)</p>
                                                        <p className="KPIdigit">3.34</p>
                                                        <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                    </div>
                                                </li>
                                                <hr></hr>
                                                <li>
                                                    <div className="keyValue">
                                                        <p>Protein (%)</p>
                                                        <p className="KPIdigit">2.03</p>
                                                        <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                    </div>
                                                </li>
                                                <hr></hr>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                {/* ________________*/}

                    <div className="row">

                        <div className="kpi_herdoverviewbox col xl4">
                        <NavLink to="/detailHerdOverview" >
                            <div className="card">
                                        <div className="row">
                                            <div className="col l8">
                                                <div className="box_icon valign-wrapper">
                                                        <i className="material-icons">bubble_chart</i>
                                                </div>
                                                    <h5>Herd Overview</h5>
                                                    <div className="kpiDiagram herd_mgmt_container">

                                                </div>
                                            </div>
                                        <div className="col l4 kpiValues">
                                            <ul>
                                                <li>
                                                    <div className="keyValue">
                                                        <p># Conception Rate (%)</p>
                                                        <p className="KPIdigit">42</p>
                                                        <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                    </div>
                                                </li>
                                                <hr></hr>
                                                <li>
                                                    <div className="keyValue">
                                                        <p>In-/Decrease Herd (%)</p>
                                                        <p className="KPIdigit">-1.1</p>
                                                        <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                    </div>
                                                </li>
                                                <hr></hr>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </NavLink>                                

                        </div>

                        <div className="kpi_feedmgmtbox col xl4">
                            <div className="card">
                                            <div className="row">
                                                <div className="col l8">
                                                    <div className="box_icon valign-wrapper">
                                                            <i className="material-icons">invert_colors</i>
                                                    </div>
                                                        <h5>Feed Management</h5>
                                                        <div className="kpiDiagram feed_mgmt_container">

                                                    </div>
                                                </div>
                                            <div className="col l4 kpiValues">
                                                <ul>
                                                    <li>
                                                        <div className="keyValue">
                                                            <p>Feed Storage (kg)</p>
                                                            <p className="KPIdigit">2355</p>
                                                            <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                        </div>
                                                    </li>
                                                    <hr></hr>
                                                    <li>
                                                        <div className="keyValue">
                                                            <p>Feed Efficiency</p>
                                                            <p className="KPIdigit">-2.1</p>
                                                            <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                        </div>
                                                    </li>
                                                    <hr></hr>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                        </div>

                        <div className="kpi_machinemgmtbox col xl4">
                            <div className="card">
                                        <div className="row">
                                            <div className="col l8">
                                                <div className="box_icon valign-wrapper">
                                                        <i className="material-icons">build</i>
                                                </div>
                                                    <h5>Machine Management</h5>
                                                    <div className="kpiDiagram machine_mgmt_container">

                                                </div>
                                            </div>
                                            <div className="col l4 kpiValues">
                                                <ul>
                                                    <li>
                                                        <div className="keyValue">
                                                            <p>Cleaning Program Rounds</p>
                                                            <p className="KPIdigit">1</p>
                                                            <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                        </div>
                                                    </li>
                                                    <hr></hr>
                                                    <li>
                                                        <div className="keyValue">
                                                            <p># Stored Rubber Liner</p>
                                                            <p className="KPIdigit">127</p>
                                                            <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                        </div>
                                                    </li>
                                                    <hr></hr>
                                                </ul>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Taskbar />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications,
    }
};

function mapDispatchToProps(dispatch) {
    return {
      getUser: bindActionCreators(fetchUser, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MainDashboardView);