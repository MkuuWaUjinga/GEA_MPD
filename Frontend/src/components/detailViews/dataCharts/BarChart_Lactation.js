import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import M from 'materialize-css';
class BarChart_TotalHerdCount extends Component {

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
                        label: 'Lactation',
                        backgroundColor: 'rgba(255,60,0, 0.6)',
                        data: [
                            34,
                            45,
                            65,
                            32,
                            43,
                            64,
                            34,
                            43,
                            32,
                            45,
                            86
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

export default BarChart_TotalHerdCount;