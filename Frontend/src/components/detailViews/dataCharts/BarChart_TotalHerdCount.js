import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
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
                        label: 'Total Herd Count',
                        backgroundColor: 'rgba(255,108,79, 0.6)',
                        data: [
                            111,
                            113,
                            104,
                            113,
                            114,
                            114,
                            114,
                            111,
                            115,
                            116,
                            116
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
                    <Bar
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