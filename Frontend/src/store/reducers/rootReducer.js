import authReducer from './authReducer'
import cowdataReducer from './cowdataReducer'
import notificationReducer from './notificationReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    cowdata: cowdataReducer,
    notification: notificationReducer
});

export default rootReducer;