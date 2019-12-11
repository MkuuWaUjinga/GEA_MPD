import React from 'react';
import DigitComponent from '../dashboardLayouts/DigitComponent';
import DiagramComponent from '../dashboardLayouts/DiagramComponent';

const ListMilkQuality= () => {
    return (

        <div className ="dashboard-list section">

            <div className="row">
                <DigitComponent  />
                <DigitComponent  />
                <DiagramComponent />
                <DigitComponent  />
                <DigitComponent  />
                <DigitComponent  />
                <DigitComponent  />
                <DiagramComponent />
            </div>

        </div>

        
    )
}


export default ListMilkQuality;


