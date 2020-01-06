import authReducer from './authReducer'
import farmerTasksReducer from './farmerTasksReducer'
import notificationReducer from './notificationReducer'
import getCowDataReducer from './getCowDataReducer'
import spocReducer from './spocReducer'
import chatMsgReducer from './chatMsgReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    farmer_tasks: farmerTasksReducer,
    notification: notificationReducer,
    cow_data: getCowDataReducer,
    spocs: spocReducer,
    chat_messages: chatMsgReducer
});

export default rootReducer;