import React from 'react';
import DigitComponent from '../dashboardLayouts/DigitComponent';
import DiagramComponent from '../dashboardLayouts/DiagramComponent';

const ListMachineHealth= () => {
    return (

        <div className ="dashboard-list section">

            <div className="row">
                <DigitComponent  />
                <DigitComponent  />
            </div>

        </div>

        
    )
}


export default ListMachineHealth;


