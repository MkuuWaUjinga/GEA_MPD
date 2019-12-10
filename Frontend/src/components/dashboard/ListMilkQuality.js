import React from 'react';
import MilkOutputDashboard from './overviewComponents/milkPerformance/MilkOutput';
import Fat from './overviewComponents/milkQuality/Fat';

const ListMilkQuality= () => {
    return (

        <div className ="dashboard-list section">

            <div className="row">
                <div className="col s12 m6">
                <Fat />
                </div>
            </div>


        </div>

        
    )
}


export default ListMilkQuality;


