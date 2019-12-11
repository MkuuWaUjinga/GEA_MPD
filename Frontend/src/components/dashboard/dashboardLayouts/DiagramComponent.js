import React from 'react';
import {Link} from 'react-router-dom';
const DiagramComponent= () => {
    return (

        <div className="col s12 m12">
            <div className="digitComponent card white darken-1">
                    <div className="card-content black-text">

                        <span className="card-title">DIAGRAM COMPONENT</span>
                        <div class="card-image">
                            <img src="https://www.tv-bopfingen.de/wp-content/uploads/es_web_platzhalter_bild_3x2@800px.png"></img>
                        </div>
                        <p>#Date</p>
                        <div className="card-action">
                            <Link to='/milkoutputdetails' className="brand-logo">Placeholder for link</Link>
                        </div>
                    </div>
            </div>
        </div>
        
    )
}


export default DiagramComponent;