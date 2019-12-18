import React from 'react';
import DiagramComponent from '../dashboardLayouts/DiagramComponent';
import HerdCountOverview from '../dashboardLayouts/HerdCountOverview';

const ListHerdMgmt= () => {
    return (

        <div className ="dashboard-list section">

            <div className="row">
                <HerdCountOverview  />
                
            </div>

        </div>

        
    )
}


export default ListHerdMgmt;


