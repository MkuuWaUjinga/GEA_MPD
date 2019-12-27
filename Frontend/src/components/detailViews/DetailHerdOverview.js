import React, {Component} from 'react';
import defaultDetailView from '../../assets/img/defaultDetailView.png';
import { Line} from 'react-chartjs-2';
import Taskbar from '../../layout/taskbar/Taskbar'
import SomaticCellCountView from '../detailViews/HerdOverviewDetailComponents/SomaticCellCount'

class DetailHerdOverview extends Component {

state = {

}

constructor(props){
    
    super(props);
    
}

    render() {
        return(

<div className="main_detail_dashboard row">
    <div className="detailviews col xl9">
        <h2 className="center">Herd Overview</h2>
    <div className="row center">
        <div className="col l2">
            <div className="card">
                <div className="card-content">
                    <div className="keyValue">
                        <p>Total Herd Count</p>
                        <p className="KPIdigit">233</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col l2">
            <div className="card">
                <div className="card-content">
                    <div className="keyValue">
                        <p>Lactating Animals</p>
                        <p className="KPIdigit">213</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col l2">
            <div className="card">
                <div className="card-content">
                    <div className="keyValue">
                        <p>Sick cows (Mastitis)</p>
                        <p className="KPIdigit">8</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col l2">
            <div className="card">
                <div className="card-content">
                    <div className="keyValue">
                        <p>Conception Rate (%)</p>
                        <p className="KPIdigit">40</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col l2">
            <div className="card">
                <div className="card-content">
                    <div className="keyValue">
                        <p>In/-Decrease Herd</p>
                        <p className="KPIdigit">-2.1</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<SomaticCellCountView />
</div>

<Taskbar />
</div>

        )
    }
}

export default DetailHerdOverview;