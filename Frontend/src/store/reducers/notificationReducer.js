import uuid from 'react-uuid';
import {TOGGLE_NOTIFICATION} from '../actions/toggleNotification';
import {FETCH_USER} from '../APIactions/fetchUser';


const initState = {
    notifications: [
        {id: uuid(),
        date: '23/10/19',
        time: '8:24',
        title:"15:25 - Abnormal Somatic Cell Count detected", 
        content: '5 cows show a high somatic cell count',
        category: 'DetailHerdOverview/SickCows',
        cows: [
            {
                cow_id: 124123,
                SCC: [
                    12323,
                    34535,
                    12344,
                    56744,
                    34564,
                    45745,
                    84532
                ]
            },
            {
                cow_id: 235234,
                SCC: [
                    34523,
                    23454,
                    56765,
                    23454,
                    23467,
                    65735,
                    96576
                ]
            },
            {
                cow_id: 4545623,
                SCC: [
                    45365,
                    23454,
                    37546,
                    34575,
                    34565,
                    35344,
                    73446
                ]
            },
            {
                cow_id: 24353,
                SCC: [
                    32456,
                    12432,
                    34656,
                    72342,
                    24343,
                    56734,
                    84354
                ]
            },
            {
                cow_id: 346453,
                SCC: [
                    43634,
                    43634,
                    36000,
                    54345,
                    23425,
                    59776,
                    93454
                ]
            },

        ]
        }
    ],
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