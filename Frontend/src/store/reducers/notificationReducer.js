import uuid from 'react-uuid';
import {TOGGLE_NOTIFICATION} from '../actions/toggleNotification';

const initState = {
    notifications: [
        {id: uuid(),
        date: '23/10/19',
        time: '8:24',
        title:"Important - Abnormal Somatic Cell Count detected", 
        content: '5 cows show a high somatic cell count',
        category: 'DetailHerdOverview/SickCows',
        cows: [
            {
                cow_id: 124123,
                SCC: 'TODO: SCC Data'
            },
            {
                cow_id: 235234,
                SCC: 'TODO: SCC Data'
            },
            {
                cow_id: 4545623,
                SCC: 'TODO: SCC Data'
            },
            {
                cow_id: 24353,
                SCC: 'TODO: SCC Data'
            },
            {
                cow_id: 346453,
                SCC: 'TODO: SCC Data'
            },

        ]
        },

        {id: uuid(),
            date: '23/10/19',
            time: '4:24',
            title:"Warning - blasbdfaldsfdslf", 
            content: 'XYZ',
            category: 'DetailHerdOverview/SickCows',
            cows: [
                {
                    cow_id: 235324,
                    SCC: 'TODO: SCC Data'
                }
    
            ]
            },

            {id: uuid(),
                date: '23/10/19',
                time: '2:24',
                title:"Note - blasbsdfasdf", 
                content: 'XYZ',
                category: 'DetailHerdOverview/SickCows',
                cows: [
                    {
                        cow_id: 235324,
                        SCC: 'TODO: SCC Data'
                    },
                    {
                        cow_id: 24353245,
                        SCC: 'TODO: SCC Data'
                    },
        
                ]
                },
    

            

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