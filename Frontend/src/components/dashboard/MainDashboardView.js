import React, {Component} from 'react';
import ListMilkPerformance from './categories/ListMilkPerformance';
import ListMilkQuality from './categories/ListMilkQuality';
import ListFeedMgmt from './categories/ListFeedMgmt';
import ListHerdMgmt from './categories/ListHerdMgmt';
import ListMachineHealth from './categories/ListMachineHealth';
import Notifications from '../../components/dashboard/dashboardLayouts/Notifications'
import {connect} from 'react-redux'

class MainDashboardView extends Component {
    render() {
        const {notifications} = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                {/* 
                    <div className="dashOutline col m6">
                        <div className="dashContainer milkPerformance">
                            <h2>Milk Performance Dashboard</h2>
                            <ListMilkPerformance />
                        </div>
                    </div>

                    <div className="dashOutline col m6">
                        <div className="dashContainer milkQuality ">
                            <h2>Milk Quality Dashboard</h2>
                            <ListMilkQuality />
                        </div>
                    </div>
                */}
                    <div className="dashOutline col m12">
                        <div className="dashContainer herdMgmt">
                            <h2>Herd Management Dashboard</h2>
                            <ListHerdMgmt />                        
                        </div>
                    </div>
                    {/* 
                <div className="dashOutline col m6">
                        <div className="notificationContainer">
                            <h2>Notification Container</h2>
                            <Notifications notifications={notifications}/>                        
                        </div>
                    </div>
                
                    <div className="dashOutline col m6">
                        <div className="dashContainer feedMgmt">
                            <h2>Feed Management Dashboard</h2>
                            <ListFeedMgmt />     
                        </div>
                    </div>

                    <div className="dashOutline col m6">
                        <div className="dashContainer machineHealth ">
                            <h2>Machine Health Dashboard</h2>
                            <ListMachineHealth />                          
                        </div>
                    </div>
                */}
                
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        notifications: state.notification.notifications //connects/maps store data with this component
    }
}
export default connect(mapStateToProps)(MainDashboardView);