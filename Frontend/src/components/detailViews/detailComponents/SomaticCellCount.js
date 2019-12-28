import React, {Component} from 'react';
import { Line} from 'react-chartjs-2';
import M from 'materialize-css'; 
import ModalAddTask from "../../../layout/taskbar/ModalAddTask";
class SomaticCellCountView extends Component {

state = {
    modalClicked: false
}

componentDidMount (){
    M.AutoInit();
}

modalClicked () {
    this.setState({modalClicked: true})
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
        const modalClicked = this.state.modalClicked ? (
            <ModalAddTask />
          ) : (null);



        return(
            <div className="SomaticCellCountContainer">
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

                        <div className="CowsInTreatment">
                            <h4>Cows currently under treatment</h4>
                            <div className="row center black-text">
                                <div className="col l2">Cow</div>
                                <div className="col l2">Somatic Cell Count</div>
                                <div className="col l2">Medication</div>
                                <div className="col l2">Start</div>
                                <div className="col l2">Treatment Period</div>
                                <div className="col l2">Due Date</div>
                            </div>
                            <ul className="collapsible">
                                <li>
                                <div className="collapsible-header row center">
                                        <div className="col l2">
                                            Cow-ID 5689
                                        </div>
                                        <div className="col l2">
                                            35132345
                                        </div>
                                        <div className="col l2">
                                            #Medication
                                        </div>
                                        <div className="col l2">
                                            01/04/19
                                        </div>
                                        <div className="col l2">
                                            (========--)
                                        </div>
                                        <div className="col l2">
                                            13/04/19
                                        </div>
                                </div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                <div className="collapsible-header row center">
                                        <div className="col l2">
                                            Cow-ID 12322
                                        </div>
                                        <div className="col l2">
                                            15325345
                                        </div>
                                        <div className="col l2">
                                            #Medication
                                        </div>
                                        <div className="col l2">
                                            23/02/19
                                        </div>
                                        <div className="col l2">
                                            (====-------)
                                        </div>
                                        <div className="col l2">
                                            15/05/19
                                        </div>
                                </div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                <div className="collapsible-header row center">
                                        <div className="col l2">
                                            Cow-ID 23421
                                        </div>
                                        <div className="col l2">
                                            23514322
                                        </div>
                                        <div className="col l2">
                                            #Medication
                                        </div>
                                        <div className="col l2">
                                            31/03/19
                                        </div>
                                        <div className="col l2">
                                            (==----------)
                                        </div>
                                        <div className="col l2">
                                            25/05/19
                                        </div>
                                </div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                            </ul>
        
                        </div>

                        <div className="NotificationsSomaticCellCount">
                            <h4>Notifcations</h4>

                            <div>
                                <h5>Today</h5>
                                <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header">
                                        <div className="row">
                                            <div className="col l12">
                                            <i className="large material-icons left">account_circle</i>
                                            <h6>8:24 - Abnormal Somatic Cell Count detected</h6>
                                            </div>
                                            <div className="col l12">
                                                    <p>Notification Details: fdkjadfksj kadfs akdfs aksdfaksdfj aksdfaksdfj
                                                        dsfh jsdf kjdfskjasdfkjas dfajs
                                                    </p>
                                            </div>
                                            </div>
                                                
                                    </div>
                                <div className="collapsible-body">
                                <div className="row">
                                    <div className="col l12">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                    
                                        <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                        <a href="#">Put cow under treatment</a>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="col l12">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                    
                                        <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                        <a href="#">Put cow under treatment</a>
                                        </div>
                                    </div>
                                    </div>
                                    <div className ="col l12">

                                        <hr />
                                        <div className="right">
                                    <a class="waves-effect waves-light btn">Create New Task</a>
                                    <a class="waves-effect waves-light btn">Forward to SPOC</a>
                                    </div>

                                    </div>
                                </div>
                                </div>
                                </li>

                            </ul>

                            </div>
                            <hr />
                            <div>
                                <h5>23/10/19</h5>
                                <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header">
                                        <div className="row">
                                            <div className="col l12">
                                            <i className="large material-icons left">account_circle</i>
                                            <h6>14:24 - Cow behaved unusual</h6>
                                            </div>
                                            <div className="col l12">
                                                    <p>Notification Details: blasdfbaksdbfkadsfkjdsf
                                                    </p>
                                            </div>
                                            </div>
                                                
                                    </div>
                                <div className="collapsible-body">
                                <div className="row">
                                    <div className="col l12">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                    
                                        <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                        <a href="#">Put cow under treatment</a>
                                        </div>
                                    </div>
                                    </div>

                                  
                                    <div className ="col l12">

                                        <hr />
                                        <div className="right">
                                    <a class="waves-effect waves-light btn">Create New Task</a>
                                    <a class="waves-effect waves-light btn">Forward to SPOC</a>
                                    </div>

                                    </div>
                                </div>
                                </div>
                                </li>

                                <li>
                                    <div className="collapsible-header">
                                        <div className="row">
                                            <div className="col l12">
                                            <i className="large material-icons left">account_circle</i>
                                            <h6>10:11 - Cow #1234 is sick</h6>
                                            </div>
                                            <div className="col l12">
                                                    <p>Notification Details: blasdfbaksdbfkadsfkjdadsf dsf dsf esdafdfsadf sf
                                                    </p>
                                            </div>
                                            </div>
                                                
                                    </div>
                                <div className="collapsible-body">
                                <div className="row">
                                    <div className="col l12">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                    
                                        <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                        <a href="#">Put cow under treatment</a>
                                        </div>
                                    </div>
                                    </div>

                                  
                                    <div className ="col l12">

                                        <hr />
                                        <div className="right">
                                    <a class="waves-effect waves-light btn" onClick={() => this.modalClicked}>Create New Task</a>
                                    {modalClicked}
                                    <a class="waves-effect waves-light btn">Forward to SPOC</a>
                                    </div>

                                    </div>
                                </div>
                                </div>
                                </li>

                            </ul>

                            </div>
                        </div>



            </div>



        )
    }
}



export default SomaticCellCountView;