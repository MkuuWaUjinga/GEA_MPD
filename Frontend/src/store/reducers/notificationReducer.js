import uuid from 'react-uuid';
import {TOGGLE_NOTIFICATION} from '../actions/toggleNotification';
import {FETCH_USER} from '../APIactions/fetchUser';


const initState = {
    notifications: [],
    isActive: false
};

const notificationReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_NOTIFICATION: {
            const newStatus = action.payload;
            return {
                ...state,
                isActive: newStatus
            } 
        }
        case FETCH_USER:
            return Object.assign(
                {}, state, {
                    notifications: action.notifications
                });
        default: {
            return state;
        }
    }
};

export default notificationReducer