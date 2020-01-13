import React, {Component} from 'react';
import ListHerdMgmt from './dashboardLayouts/ListHerdMgmt';
import Taskbar from '../../../src/layout/taskbar/Taskbar'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import './dashboard.css';

class MainDashboardView extends Component {
    render() {
        const {notifications} = this.props;
        return(
            <div className="main_dashboard container row">
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
                                                        <p className="KPIdigit">3000</p>
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
                                                        <p>Milking time/Cow (min)</p>
                                                        <p className="KPIdigit">5</p>
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
                                                        <p className="KPIdigit">3.51</p>
                                                        <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                    </div>
                                                </li>
                                                <hr></hr>
                                                <li>
                                                    <div className="keyValue">
                                                        <p>Protein (%)</p>
                                                        <p className="KPIdigit">3.1</p>
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
                                                        <i className="material-icons">assessment</i>
                                                </div>
                                                    <h5>Herd Overview</h5>
                                                    <div className="kpiDiagram herd_mgmt_container">

                                                </div>
                                            </div>
                                        <div className="col l4 kpiValues">
                                            <ul>
                                                <li>
                                                    <div className="keyValue">
                                                        <p># Lactating Animals</p>
                                                        <p className="KPIdigit">150</p>
                                                        <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                    </div>
                                                </li>
                                                <hr></hr>
                                                <li>
                                                    <div className="keyValue">
                                                        <p>In-/Decrease Herd (%)</p>
                                                        <p className="KPIdigit">-2.1</p>
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
                                                            <p className="KPIdigit">3890</p>
                                                            <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                        </div>
                                                    </li>
                                                    <hr></hr>
                                                    <li>
                                                        <div className="keyValue">
                                                            <p>Dry Matter intake (%)</p>
                                                            <p className="KPIdigit">23</p>
                                                            <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                        </div>
                                                    </li>
                                                    <hr></hr>
                                                    <li>
                                                        <div className="keyValue">
                                                            <p>Feed Efficiency (%)</p>
                                                            <p className="KPIdigit">4</p>
                                                            <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                        </div>
                                                    </li>
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
                                                    <h5 >Herd Overview</h5>
                                                    <div className="kpiDiagram machine_mgmt_container">

                                                </div>
                                            </div>
                                            <div className="col l4 kpiValues">
                                                <ul>
                                                    <li>
                                                        <div className="keyValue">
                                                            <p>OEE (%)</p>
                                                            <p className="KPIdigit">95%</p>
                                                            <p className="kpi_timestamp">Sat 9, 8:32</p>
                                                        </div>
                                                    </li>
                                                    <hr></hr>
                                                    <li>
                                                        <div className="keyValue">
                                                            <p># Stored Rubber Liner</p>
                                                            <p className="KPIdigit">10</p>
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

export default MainDashboardView;