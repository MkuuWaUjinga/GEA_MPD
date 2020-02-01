import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import M from 'materialize-css';
class BarChart_ConceptionRate extends Component {

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
                        label: 'Conception Rate',
                        backgroundColor: 'rgba(255,232,25, 0.6)',
                        data: [
                            32,
                            56,
                            5,
                            34,
                            34,
                            74,
                            45,
                            23,
                            53,
                            43,
                            40
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

export default BarChart_ConceptionRate;