import React from 'react';
import DigitComponent from '../dashboardLayouts/DigitComponent';
import DiagramComponent from '../dashboardLayouts/DiagramComponent';

const ListFeedMgmt= () => {
    return (

        <div className ="dashboard-list section">

            <div className="row" >
                <DiagramComponent />
                <DiagramComponent />
                <DiagramComponent />
            </div>

        </div>

        
    )
}


export default ListFeedMgmt;


