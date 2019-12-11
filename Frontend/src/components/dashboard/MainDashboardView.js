import React, {Component} from 'react';
import ListMilkPerformance from './categories/ListMilkPerformance';
import ListMilkQuality from './categories/ListMilkQuality';

class MainDashboardView extends Component {
    render() {
        return(
            <div className="dashboard container">
                <div className="row">

                    <div className="dashOutline col m6">
                        <div className="dashContainer milkPerformance">
                            <h2>Milk Performance Dashboard</h2>
                            <ListMilkPerformance />
                        </div>
                    </div>

                    <div className="dashOutline col m6">
                        <div className="dashContainer milkQuality ">
                        <h2>Milk Quality Dashboard</h2>
                            <ListMilkQuality />
                        </div>
                    </div>

                    <div className="dashOutline col m6">
                        <div className="dashContainer herdMgmt">
                        <h2>Herd Management Dashboard</h2>
                            Evtl. other Components which are important to show
                        </div>
                    </div>

                    <div className="dashOutline col m6">
                        <div className="dashContainer feedMgmt col m6">
                        <h2>Feed Management Dashboard</h2>
                            Evtl. other Components which are important to show
                        </div>
                    </div>

                    <div className="dashOutline col m6">
                        <div className="dashContainer machineHealth col m6">
                        <h2>Machine Health Dashboard</h2>
                            Evtl. other Components which are important to show
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainDashboardView;