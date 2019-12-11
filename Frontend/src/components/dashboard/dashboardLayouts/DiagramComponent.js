import React from 'react';
import {Link} from 'react-router-dom';
import defaultDiagram from '../../../assets/img/defaultDiagram.JPG';

const DiagramComponent= () => {
    return (

        <div className="col s12 m12">
            <div className="diagramComponent card white darken-1">
                    <div className="card-content black-text">

                        <span className="card-title">DIAGRAM COMPONENT</span>
                        <div class="card-image">
                            {/*<img src="https://www.tv-bopfingen.de/wp-content/uploads/es_web_platzhalter_bild_3x2@800px.png"></img>*/}
                            <img src={defaultDiagram} alt="defaultDiagram" />
                        </div>
                        <p>#Date</p>
                        <div className="card-action">
                            <Link to='/milkoutputdetails' className="detailpageLink">Placeholder for link</Link>
                        </div>
                    </div>
            </div>
        </div>
        
    )
}


export default DiagramComponent;