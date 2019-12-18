import React from 'react';
import {Link} from 'react-router-dom';

const HerdCountOverview = () => {
    return (


        <div className="col s12 m12">
            <Link to='/milkoutputdetails'>
                <div className="herdCountOverview card white darken-1">
                        <div className="card-content black-text">

                            <span className="card-title center">Heard Health</span>
                            <div className="herdHealthKPI">
                                <ul>
                                    <li>
                                        <div className="keyValue">
                                            <p>Total Herd</p>
                                            <p className="KPIdigit">233</p>
                                        </div>
                                    </li>
                                    <hr></hr>
                                    <li>
                                        <div className="keyValue">
                                            <p>Lactating Cows</p>
                                            <p className="KPIdigit">21</p>
                                        </div>
                                    </li>
                                    <hr></hr>
                                    <li>
                                        <div className="keyValue">
                                            <p>High deviation in somatic cell count</p>
                                            <p className="KPIdigit">13</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                
                            {/* 
                            <div className="card-action">
                                <Link to='/milkoutputdetails'> Detail View</Link>
                            </div>
                            */}
                        </div>
                </div>
            </Link>
        </div>
    )
}


export default HerdCountOverview;