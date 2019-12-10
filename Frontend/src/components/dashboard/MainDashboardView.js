import React, {Component} from 'react';
import ListMilkPerformance from './ListMilkPerformance';
import ListMilkQuality from './ListMilkQuality';

class MainDashboardView extends Component {
    render() {
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="dashContainer milkPerformance col m4">
                        <h2>Milk Performance Dashboard</h2>
                        <ListMilkPerformance />
                    </div>
                    <div className="dashContainer milkQualitycol col m4">
                    <h2>Milk Quality Dashboard</h2>
                         <ListMilkQuality />
                    </div>
                    <div className="dashContainer herdMgmt col m4 ">
                    <h2>Herd Management Dashboard</h2>
                        Evtl. other Components which are important to show
                    </div>
                    <div className="dashContainer feedMgmt col m4">
                    <h2>Feed Management Dashboard</h2>
                        Evtl. other Components which are important to show
                    </div>
                    <div className="dashContainer machineHealth col m4">
                    <h2>Machine Health Dashboard</h2>
                        Evtl. other Components which are important to show
                    </div>
                </div>
            </div>
        )
    }
}

export default MainDashboardView;