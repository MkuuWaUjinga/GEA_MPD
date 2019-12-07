import React, {Component} from 'react';
import DashboardList from './DashboardList';


class MainDashboardView extends Component {
    render() {
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <DashboardList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        Evtl. other Components which are important to show
                    </div>
                </div>
            </div>
        )
    }
}

export default MainDashboardView;