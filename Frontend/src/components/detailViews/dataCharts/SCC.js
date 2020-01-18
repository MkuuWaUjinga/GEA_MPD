import React, {Component} from 'react';
import { Line} from 'react-chartjs-2';
import M from 'materialize-css';  
class SomaticCellCountView extends Component {

state = {
SomaticCellCountView
}

componentDidMount (){
    M.AutoInit();



    const payloadData = this.props.payload;
    console.log(payloadData);
    let labelarray= [];
    let cowarray = [];

    payloadData.map (x => {
       labelarray.push(x.date);
       cowarray.push(x.value);
    })

    let newChartData = {
        labels : labelarray,
        datasets : [{
            label: 'Somatic Cell Count',
            data: cowarray
        }]
    }

    this.setState ({
        ...this.state,
        chartData: newChartData

    })




}



constructor(props){
    super(props); 
    this.state = {
        chartData:{
            labels: [],
                    /*[
                        '01.02.19',
                        '02.02.19',
                        '03.02.19',
                        '04.02.19',
                        '05.02.19',
                        '06.02.19',
                        '07.02.19'
                    ], */
            datasets: [
                {
                    label: 'Somatic Cell Count',
                    data: []
                    /*[
                        64500,
                        65450,
                        36000,
                        75000,
                        74500,
                        70000,
                        89000
                    ]*/
                }
            ]
        }
    }
    
}

    render() {
        const {uniqueCowData} = this.props;
        return(
            <div className="SomaticCellCountContainer">
                        <div className="SomaticCellCountChart">
                            <Line
                                data={this.state.chartData}
                                width={100}
                                height={250}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true
                                }}
                            />
                        </div>

            </div>



        )
    }
}

export default SomaticCellCountView;