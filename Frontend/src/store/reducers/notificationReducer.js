import {TOGGLE_NOTIFICATION} from '../actions/toggleNotification';

const initState = {
    notifications: [
        {id: 1, title:"Warning", content: 'please milk your cows properly'},
        {id: 2, title:"Notification", content: 'please milk'},
        {id: 3, title:"Alarm", content: 'go outside and feed'}
    ],
    isActive: false
}

const notificationReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_NOTIFICATION: {
            const newStatus = action.payload;
            return {
                ...state,
                isActive: newStatus
            } 
        }

        default: {
            return state;
        }
    }
}

export default notificationReducer