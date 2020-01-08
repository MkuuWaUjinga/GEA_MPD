import React, {Component} from 'react';
import Taskbar from '../../layout/taskbar/Taskbar'
import ConceptionRate from '../detailViews/detailComponents/ConceptionRate'
import HerdCount from '../detailViews/detailComponents/HerdCount'
import SomaticCellCountView from './detailComponents/SickCows'
import HerdIncrease from '../detailViews/detailComponents/HerdIncrease'
import Lactation from '../detailViews/detailComponents/Lactation'

class DetailHerdOverview extends Component {

state = {
    displayedComponent: ""
}



constructor(props){
    
    super(props);
    
}



handleSwitch = (componentName) => {
    this.setState({displayedComponent: componentName});
}

renderComponent(){
    switch(this.state.displayedComponent){
        case "HERD_COUNT":
            return <HerdCount />
        case "LACTATION":
            return <Lactation />
        case "SICK_COWS":
            return <SomaticCellCountView />
        case "CONCEPTION_RATE":
            return <ConceptionRate />
        case "HERD_INCREASE":
            return <HerdIncrease />
    }
}

    render() {


        return(

<div className="main_detail_dashboard row">
    <div className="detailviews col xl9">
        <h2 className="center">Herd Overview</h2>
    <div className="row center">
        <div className="col l2">
            <div className={this.state.displayedComponent === "HERD_COUNT" ? 'card lime active' : 'card'}  onClick={() => this.handleSwitch("HERD_COUNT")}>
                <div className="card-content">
                    <div className="keyValue">
                        <p>Total Herd Count</p>
                        <p className="KPIdigit">233</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col l2">
            <div className={this.state.displayedComponent === "LACTATION" ? 'card lime active' : 'card'}  onClick={() => this.handleSwitch("LACTATION")}>
                <div className="card-content">
                    <div className="keyValue">
                        <p>Lactating Animals</p>
                        <p className="KPIdigit">213</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col l2">
            <div className={this.state.displayedComponent === "SICK_COWS" ? 'card lime active' : 'card'} onClick={() => this.handleSwitch("SICK_COWS")}>
                <div className="card-content">
                    <div className="keyValue">
                        <p>Sick cows (Mastitis)</p>
                        <p className="KPIdigit">3</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col l2">
            <div className={this.state.displayedComponent === "CONCEPTION_RATE" ? 'card lime active' : 'card'} onClick={() => this.handleSwitch("CONCEPTION_RATE")}>
                <div className="card-content">
                    <div className="keyValue">
                        <p>Conception Rate (%)</p>
                        <p className="KPIdigit">40</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col l2">
            <div className={this.state.displayedComponent === "HERD_INCREASE" ? 'card lime active' : 'card'} onClick={() => this.handleSwitch("HERD_INCREASE")}>
                <div className="card-content">
                    <div className="keyValue">
                        <p>In/-Decrease Herd</p>
                        <p className="KPIdigit">-2.1</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

{this.renderComponent()}



</div>

<Taskbar />
</div>

        )
    }
}

export default DetailHerdOverview;