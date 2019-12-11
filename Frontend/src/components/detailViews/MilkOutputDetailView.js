import React, {Component} from 'react';
import defaultDetailView from '../../assets/img/defaultDetailView.png';

class MilkOutputDetailView extends Component {
    render() {
        return(
            <div>
                <div className="container section project-details">
                    <div className="card z-depth-0 grey lighten-4 grey-text" >
                        <div className="card-content ">
                            <h4>MilkOutput Detail View</h4>
                            <div class="card-image">
                            {/*<img src="https://www.tv-bopfingen.de/wp-content/uploads/es_web_platzhalter_bild_3x2@800px.png"></img>*/}
                            <img src={defaultDetailView} alt="defaultDetailView" />
                            </div>
                        </div>
                        <div className="card-action">
                            <div>Posted by Jenni</div>
                            <div>2nd September, 3am</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MilkOutputDetailView;