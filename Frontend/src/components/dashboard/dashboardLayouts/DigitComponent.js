import React from 'react';
import {Link} from 'react-router-dom';
const DigitComponent= () => {
    return (


        <div className="col s12 m6">
            <div className="digitComponent card white darken-1">
                    <div className="card-content black-text">

                        <span className="card-title center">DIGIT COMPONENT</span>
                        <p className="KPIdigit">#VALUE</p>
                        <p>#Date</p>
              

                        <div className="card-action">
                            <Link to='/milkoutputdetails' className="brand-logo">Detail View</Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default DigitComponent;