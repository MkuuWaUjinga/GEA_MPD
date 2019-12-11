import React from 'react';
import DigitComponent from '../dashboardLayouts/DigitComponent';
import DiagramComponent from '../dashboardLayouts/DiagramComponent';

const ListHerdMgmt= () => {
    return (

        <div className ="dashboard-list section">

            <div className="row">
                <DigitComponent  />
                <DigitComponent  />
                <DigitComponent  />
                <DigitComponent  />
                <DiagramComponent />
                <DiagramComponent />
                <DigitComponent  />
                <DigitComponent  />
                
            </div>

        </div>

        
    )
}


export default ListHerdMgmt;


