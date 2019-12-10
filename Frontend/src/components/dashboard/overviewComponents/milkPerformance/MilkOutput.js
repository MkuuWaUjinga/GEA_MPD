import React from 'react';
import {Link} from 'react-router-dom';

const MilkOutputDashboard = () => {
    return (
        <div className="card white darken-1">
                <div className="card-content black-text">
                    <span className="card-title">Milkoutput Dashboard</span>
                    <p>Placholder for Milkoutput Dashboard</p>
                    <p className="grey-text">blbablab</p>
                    <div className="card-action">
                        <Link to='/milkoutputdetails' className="brand-logo">DetailView</Link>
                    </div>
                </div>
        </div>
    )
}


export default MilkOutputDashboard;

