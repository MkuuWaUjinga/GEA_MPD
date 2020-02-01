import uuid from 'react-uuid';
import { DELETE_TASK } from '../actions/deleteTask';
import { ADD_TASK } from '../actions/addTask';
import { FETCH_TASKS } from "../APIactions/fetchTasks";
import { NavLink } from "react-router-dom";
import React from "react";

const initState = {
    tasks: [

        { assigned_person_id: "...", id: uuid(), task_title: 'Milk Cows', description: 'milk them efficiently', todos: ["hallo"] },
    ],
    spocsToTask: {}
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
                task_title: action.payload.task_title,
                description: action.payload.description,
                todos: action.payload.todoList
            };
            return {
                ...state,
                tasks: [newTaskItem, ...state.tasks]
            };
        }
        case FETCH_TASKS: {
            let spocsToTaskMap = {};
            let task;
            for (task of action.tasks.tasks) {
                spocsToTaskMap[task.assigned_person_id] = spocsToTaskMap[task.assigned_person_id] || [];
                spocsToTaskMap[task.assigned_person_id].push(task);
            }
            return Object.assign(
                {}, state, {
                tasks: action.tasks.tasks,
                spocsToTask: spocsToTaskMap
            });
        }

        default: {
            return state;
        }
    }
};

export default tasksReducer