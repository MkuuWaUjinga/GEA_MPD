const initState = {
    notifications: [
        {id: 1, title:"Warning", content: 'please milk your cows properly'},
        {id: 2, title:"Notification", content: 'please milk'},
        {id: 3, title:"Alarm", content: 'go outside and feed'}
    ]
}

const notificationReducer = (state = initState, action) => {
    return state
}

export default notificationReducer