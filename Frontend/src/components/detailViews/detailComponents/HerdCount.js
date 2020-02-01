import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import BarChart_TotalHerdCount from '../dataCharts/BarChart_TotalHerdCount';
import M from 'materialize-css';

class HerdCount extends Component {

    state = {

    }

    componentDidMount() {
        M.AutoInit();
    }



    render() {
        const cow_icon = require('../../../assets/img/cow_icon.png');
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
                </div>
                <div className="subheadline">
                    <h4>Total Herd Count</h4>
                </div>

                <BarChart_TotalHerdCount />
                <div className="CowsInTreatment">

                    <ul className="collapsible">
                        <li className="tableHeader">
                            <div className="collapsible-header row center">
                                <div className="col">

                                </div>
                                <div className="col">
                                    Cow-ID
                            </div>

                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header row center">
                                <div className="col ">
                                    <img src={cow_icon} alt="cow_icon"></img>
                                </div>
                                <div className="col">
                                    125
                            </div>

                            </div>
                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                        </li>
                        <li>
                            <div className="collapsible-header row center">
                                <div className="col">
                                    <img src={cow_icon} alt="cow_icon"></img>
                                </div>
                                <div className="col">
                                    222
                            </div>

                            </div>
                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                        </li>
                        <li>
                            <div className="collapsible-header row center">
                                <div className="col">
                                    <img src={cow_icon} alt="cow_icon"></img>
                                </div>
                                <div className="col">
                                    534
                            </div>

                            </div>
                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                        </li>
                        <li>
                            <div className="collapsible-header row center">
                                <div className="col">
                                    <img src={cow_icon} alt="cow_icon"></img>
                                </div>
                                <div className="col">
                                    132
                            </div>

                            </div>
                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                        </li>
                        <li>
                            <div className="collapsible-header row center">
                                <div className="col">
                                    <img src={cow_icon} alt="cow_icon"></img>
                                </div>
                                <div className="col">
                                    423
                            </div>

                            </div>
                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                        </li>
                        <li>
                            <div className="collapsible-header row center">
                                <div className="col">
                                    <img src={cow_icon} alt="cow_icon"></img>
                                </div>
                                <div className="col">
                                    323
                            </div>

                            </div>
                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                        </li>
                    </ul>

                </div>



            </div>


        )
    }
}

export default HerdCount;