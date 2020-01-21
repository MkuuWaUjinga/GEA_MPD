import React, {Component} from 'react';
import {Line, Chart} from 'react-chartjs-2';

class SomaticCellCountView extends Component {

    state = {
        SomaticCellCountView
    };

    componentDidMount() {
        const payloadData = this.props.payload;
        let labelarray = [];
        let cowarray = [];

        payloadData.map(x => {
            const date = x.date.split(":")[0].split("-").reverse().join(".");
            let time = x.date.split(":").slice(1, -1).join(":");
            time = SomaticCellCountView.processTime(time);
            labelarray.push(date + " " + time);
            cowarray.push(x.value);
        });

        let newChartData = {
            labels: labelarray,
            datasets: [{
                label: 'Somatic Cell Count',
                data: cowarray
            }]
        };

        this.setState({
            ...this.state,
            chartData: newChartData

        })
    }


    static processTime(time) {
        return time.split(":")[0] > 12 ? time.split(":")[0] - 12 + ":" + time.split(":")[1] +
            "pm " : time + "am "
    }

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Somatic Cell Count',
                        data: [],
                        backgroundColor: "rgba(229,248,246, 0.8)",
                        borderColor: "rgb(106,237,229)"
                    }
                ]
            }
        }

    }

    render() {
        const {uniqueCowData} = this.props;
        return(
            <div className="SCCcontainer">
                        <div className="SomaticCellCountChart">
                            <Line
                                data={this.state.chartData}
                                width= {800}
                                height= {350}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: false
                                }}
                            />
                        </div>

            </div>


        )
    }
}

export default SomaticCellCountView;