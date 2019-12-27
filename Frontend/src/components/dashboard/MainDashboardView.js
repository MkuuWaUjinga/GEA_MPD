import React, {Component} from 'react';
import ListHerdMgmt from './dashboardLayouts/ListHerdMgmt';
import Notifications from '../../layout/notificationDropDown/Notifications'
import Taskbar from '../../../src/layout/taskbar/Taskbar'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'

class MainDashboardView extends Component {
    render() {
        const {notifications} = this.props;
        return(
            <div className="main_dashboard container row">
                <div className="kpi_boards col xl9">
                    <div className="row">
                        <div className="kpi_milkperfbox col xl6">
                            <div class="card blue-grey darken-1">
                                <div class="card-content white-text">
                                <span class="card-title">Milking Performance</span>
                                    <div className="row">
                                        <div className="col l8 kpiDiagram">

                                        </div>
                                        <div className="col l4 kpiValues">
                                            <ul>
                                                <li>
                                                    <div className="keyValue">
                                                        <p>Milking Output (kg)</p>
                                                        <p className="KPIdigit">3000</p>
                                                    </div>
                                                </li>
                                                <hr></hr>
                                                <li>
                                                    <div className="keyValue">
                                                        <p># Milkings</p>
                                                        <p className="KPIdigit">75</p>
                                                    </div>
                                                </li>
                                                <hr></hr>
                                                <li>
                                                    <div className="keyValue">
                                                        <p>Milking time/Cow (min)</p>
                                                        <p className="KPIdigit">5</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="kpi_milkqualbox col xl6">
                            <div class="card blue-grey darken-1">
                                    <div class="card-content white-text">
                                    <span class="card-title">Milking Quality</span>
                                    <div className="row">
                                        <div className="col l8 kpiDiagram">

                                        </div>
                                        <div className="col l4 kpiValues">
                                            <ul>
                                                <li>
                                                    <div className="keyValue">
                                                        <p>Fat (%)</p>
                                                        <p className="KPIdigit">3.51</p>
                                                    </div>
                                                </li>
                                                <hr></hr>
                                                <li>
                                                    <div className="keyValue">
                                                        <p>Protein (%)</p>
                                                        <p className="KPIdigit">3.1</p>
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

                {/* ________________*/}

                    <div className="row">

                        <div className="kpi_herdoverviewbox col xl4">
                        <NavLink to="/somaticCellCountView" >
                            <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                        <span class="card-title">Herd Overview</span>
                                        <div className="row">
                                        <div className="col l8 kpiDiagram">

                                        </div>
                                        <div className="col l4 kpiValues">
                                            <ul>
                                                <li>
                                                    <div className="keyValue">
                                                        <p># Lactating Animals</p>
                                                        <p className="KPIdigit">150</p>
                                                    </div>
                                                </li>
                                                <hr></hr>
                                                <li>
                                                    <div className="keyValue">
                                                        <p>In-/Decrease Herd (%)</p>
                                                        <p className="KPIdigit">-2.1</p>
                                                    </div>
                                                </li>
                                                <hr></hr>
                                            </ul>
                                        </div>
                                    </div>
                                        </div>
                                </div>
                        </NavLink>                                

                        </div>

                        <div className="kpi_feedmgmtbox col xl4">
                            <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                        <span class="card-title">Feed Management</span>
                                        <div className="col l12 kpiValues">
                                            <ul>
                                                <li>
                                                    <div className="keyValue">
                                                        <p>#KPI</p>
                                                        <p className="KPIdigit">#VALUE</p>
                                                    </div>
                                                </li>
                                                <hr></hr>
                                                <li>
                                                    <div className="keyValue">
                                                        <p>#KPI</p>
                                                        <p className="KPIdigit">#VALUE</p>
                                                    </div>
                                                </li>
                                                <hr></hr>
                                                <li>
                                                    <div className="keyValue">
                                                        <p>#KPI</p>
                                                        <p className="KPIdigit">#VALUE</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        </div>
                                </div>
                        </div>
                        <div className="kpi_machinemgmtbox col xl4">
                            <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                        <span class="card-title">Machine Management</span>
                                        <div className="row">
                                            <div className="col l8 kpiDiagram">

                                            </div>
                                            <div className="col l4 kpiValues">
                                                <ul>
                                                    <li>
                                                        <div className="keyValue">
                                                            <p>OEE (%)</p>
                                                            <p className="KPIdigit">95%</p>
                                                        </div>
                                                    </li>
                                                    <hr></hr>
                                                    <li>
                                                        <div className="keyValue">
                                                            <p># Stored Rubber Liner</p>
                                                            <p className="KPIdigit">10</p>
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
                    
                </div>
                <Taskbar />
            </div>
        )
    }
}

export default MainDashboardView;