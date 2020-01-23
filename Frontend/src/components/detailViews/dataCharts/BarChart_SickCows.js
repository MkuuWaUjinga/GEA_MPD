import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class SomaticCellCountView extends Component {

    constructor(props) {

        super(props);
        this.state = {
            chartData: {
                labels: ['WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],

                datasets: [
                    {
                        label: 'Sick cows under treatment',
                        backgroundColor: 'rgba(247, 137, 62, 0.616)',
                        data: [
                            5,
                            3,
                            7,
                            5,
                            6,
                            5,
                            3,
                            3,
                            4,
                            5,
                            3
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

export default SomaticCellCountView;