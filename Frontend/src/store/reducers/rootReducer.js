import userReducer from './userReducer'
import tasksReducer from './tasksReducer'
import notificationReducer from './notificationReducer'
import cowsReducer from './cowsReducer'
import spocReducer from './spocReducer'
import chatMsgReducer from './chatMsgReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    user: userReducer,
    tasks: tasksReducer,
    notifications: notificationReducer,
    cow_data: cowsReducer,
    spocs: spocReducer,
    chat_messages: chatMsgReducer
});

export default rootReducer;