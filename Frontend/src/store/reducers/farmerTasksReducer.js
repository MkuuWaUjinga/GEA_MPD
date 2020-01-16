import uuid from 'react-uuid';
import {DELETE_TASK} from '../actions/deleteTask';
import {ADD_TASK} from '../actions/addTask';
import {CHANGE_ACTIVE_TAB} from '../actions/changeActiveTab'

const initState = {
    tabActive: "FARMER",
    tasks: [
        {id: uuid(), title: 'High Somatic Cell Count detected in 5 Cows', description: '5 cows could be affected with Mastitis'},
        {id: uuid(), title: 'Milk Cows2', description: 'milk them efficiently2'},
        {id: uuid(), title: 'Milk Cows3', description: 'milk them efficiently3'},
    ]
}

const farmerTasksReducer = (state = initState, action) => {

    switch (action.type) {
        case DELETE_TASK: {
            let newTasks = state.tasks.filter(task => {
                return task.id !== action.id
            });
            return {
                ...state,
                tasks: newTasks
            } 
        }

        case ADD_TASK: {
            const id = uuid();
            const newTaskItem = {
                id,
                title: action.payload.title,
                description: action.payload.description
              };
              return { 
                  ...state, 
                  tasks: [...state.tasks, newTaskItem] 
                };
        }

        case CHANGE_ACTIVE_TAB: {
              return { 
                  ...state, 
                  tabActive: action.payload.newTab
                };
        }


        default: {
            return state;
        }
    }



}

export default farmerTasksReducer