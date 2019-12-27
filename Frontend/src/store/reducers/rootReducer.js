import authReducer from './authReducer'
import farmerTasksReducer from './farmerTasksReducer'
import notificationReducer from './notificationReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    farmer_tasks: farmerTasksReducer,
    notification: notificationReducer
});

export default rootReducer;