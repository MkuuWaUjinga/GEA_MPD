export const FETCH_TASKS = "FETCH_TASKS";

export const fetchTasks = () => {
    return (dispatch) => {
        fetch(`https://3f4bvj6fub.execute-api.eu-central-1.amazonaws.com/dev/tasks`)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: FETCH_TASKS,
                    tasks: res
                })
            })
    }
}