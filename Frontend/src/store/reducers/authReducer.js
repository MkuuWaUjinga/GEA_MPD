const initState = {
    users: [
        {userId: 'E6XrsXoB7oQhwlnL97VrlbECk9iaIXMN',
        firstName: 'John',
        lastName: 'Zimmerman',
        email: 'john.zimmerman@tum.de',
        role: 'Farmer',
        },

    ],
}


const authReducer = (state = initState, action) => {
    return state
}

export default authReducer