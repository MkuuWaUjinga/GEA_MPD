import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import M from 'materialize-css';
class BarChart_DecreaseHerd extends Component {

    state = {

    }

    componentDidMount() {
        M.AutoInit();
    }

    constructor(props) {

        super(props);
        this.state = {
            chartData: {
                labels: ['TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'],

                datasets: [
                    {
                        label: 'In-/Decrease Herd',
                        backgroundColor: 'rgba(255,198,66, 0.6)',
                        data: [
                            0.3,
                            0.5,
                            0.7,
                            0.1,
                            -1.2,
                            -1.3,
                            0.43,
                            0,
                            0.14,
                            -1.4,
                            -1.1
                        ]
                    }
                ]
            }
        }

    }

    render() {
        return (
            <div className="SCCcontainer">
                <div className="sickCows_barchart">
                    <Line
                        data={this.state.chartData}
                        width={100}
                        height={250}
                        options={
                            {
                                maintainAspectRatio: false,
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }
                            }
                        }

                    />
                </div>

            </div>



        )
    }
}

export default BarChart_DecreaseHerd;