import React from 'react';
import {Link} from 'react-router-dom';

const Fat = () => {
    return (
        <div className="card white darken-1">
                <div className="card-content black-text">
                    <span className="card-title">Fat View</span>
                    <p>345345</p>
                    <p className="grey-text">blbablab</p>
                    <div className="card-action">
                        <Link to='/' className="brand-logo">DetailView</Link>
                    </div>
                </div>
        </div>
    )
}


export default Fat;

