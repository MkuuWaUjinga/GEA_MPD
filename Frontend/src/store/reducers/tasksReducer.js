import uuid from 'react-uuid';
import {DELETE_TASK} from '../actions/deleteTask';
import {ADD_TASK} from '../actions/addTask';
import {FETCH_TASKS} from "../APIactions/fetchTasks";

const initState = {
    tasks: [
        {id: uuid(), title: 'Milk Cows', description: 'milk them efficiently'},
        {id: uuid(), title: 'Milk Cows2', description: 'milk them efficiently2'},
        {id: uuid(), title: 'Milk Cows3', description: 'milk them efficiently3'},
    ]
};

const tasksReducer = (state = initState, action) => {

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
        case FETCH_TASKS: {
            console.log(action);
            return {
                ...state,
                ...action.tasks
            }
        }

        default: {
            return state;
        }
    }
};

export default tasksReducer