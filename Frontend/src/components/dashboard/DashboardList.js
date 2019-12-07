import React from 'react';
import MilkOutputDashboard from './dashboardComponents/MilkOutputDashboard';

const DashboardList = () => {
    return (

        <div className ="dashboard-list section">

            <div className="row">
                <div className="col s12 m6">
                <MilkOutputDashboard />
                <MilkOutputDashboard  />
                <MilkOutputDashboard  />
                </div>
            </div>


        </div>

        
    )
}


export default DashboardList;


