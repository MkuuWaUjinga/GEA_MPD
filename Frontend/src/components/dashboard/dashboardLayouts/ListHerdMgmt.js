import React from 'react';
import DiagramComponent from './DiagramComponent';
import HerdCountOverview from './HerdCountOverview';

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


