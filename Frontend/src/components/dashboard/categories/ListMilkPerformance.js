import React from 'react';
import DigitComponent from '../dashboardLayouts/DigitComponent';
import DiagramComponent from '../dashboardLayouts/DiagramComponent';

const ListMilkPerformance= () => {
    return (

        <div className ="dashboard-list section">

            <div className="row">
                <DigitComponent  />
                <DigitComponent  />
                <DigitComponent  />
                <DigitComponent  />
                <DiagramComponent />
            </div>


        </div>

        
    )
}


export default ListMilkPerformance;


