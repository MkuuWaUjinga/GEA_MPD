export const ADD_TASK = "ADD_TASK";

export const addTask = (newTask) => {
    console.log("ADDED TASK - ACTION", newTask)
    return {
        type: 'ADD_TASK',
        payload: newTask
    }
}