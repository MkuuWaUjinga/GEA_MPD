import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

import BarChart_DecreaseHerd from '../dataCharts/BarChart_DecreaseHerd';
import M from 'materialize-css';  

class HerdIncrease extends Component {

state = {

}

componentDidMount (){
    M.AutoInit();
}



    render() {
        const cow_icon = require('../../../assets/img/cow_icon.png');
        return(
            <div className="SomaticCellCountContainer">

            <div className="subheadline">
                <h4>Lactating Animals</h4>
            </div>

            <BarChart_DecreaseHerd />
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
                                523
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
                                113
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
                                745
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
            </div>

        </div>


        )
    }
}

export default HerdIncrease;