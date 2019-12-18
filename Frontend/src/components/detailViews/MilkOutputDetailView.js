import React, {Component} from 'react';
import defaultDetailView from '../../assets/img/defaultDetailView.png';
import { Line} from 'react-chartjs-2';

class MilkOutputDetailView extends Component {

state = {

}

constructor(props){
    
    super(props);
    this.state = {
        chartData:{
            labels: ['01.02.19','02.02.19','03.02.19','04.02.19','05.02.19','06.02.19','07.02.19'],
            datasets: [
                {
                    label: 'Somatic Cell Count',
                    data:[
                        64500,
                        65450,
                        36000,
                        75000,
                        74500,
                        70000,
                        89000
                    ]
                }
            ]
        }
    }
    
}

    render() {
        return(
            <div>
                <div className="container section project-details">
                    <div className="card z-depth-0 grey lighten-4 grey-text" >
                        <div className="card-content ">
                            <h4>Somatic Cell Count Overview</h4>
                         {/* 
                            <div class="card-image">
                            <img src={defaultDetailView} alt="defaultDetailView" />
                            </div>
                        </div>
                        <div className="card-action">
                            <div>Posted by Jenni</div>
                            <div>2nd September, 3am
                        </div> */}
                        <div className="CowID">
                            <ul>
                                <li><a className="waves-effect white black-text btn">CowID1</a></li>
                                <li><a className="waves-effect white black-text btn">CowID2</a></li>
                                <li><a className="waves-effect white black-text btn">CowID3</a></li>
                                <li><a className="waves-effect white black-text btn">CowID4</a></li>
                                <li><a className="waves-effect white black-text btn">CowID5</a></li>
                            </ul>
                        </div>
                        
                        <div className="SomaticCellCountChart">
                            <Line
                                data={this.state.chartData}
                                width={100}
                                height={250}
                                options={{
                                    maintainAspectRatio: false
                                }}
                            />
                        </div>




                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MilkOutputDetailView;