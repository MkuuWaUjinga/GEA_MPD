import { FETCH_USER } from "../APIactions/fetchUser";

const initState = {
    user:
    {
        userId: 'E6XrsXoB7oQhwlnL97VrlbECk9iaIXMN',
        firstName: 'John',
        lastName: 'Zimmerman',
        email: 'john.zimmerman@tum.de',
        number: '',
        role: 'Farmer',
    },
}


const userReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return Object.assign(
                {}, state,
                {
                    user: {
                        userId: action.userId,
                        firstName: action.firstName,
                        lastName: action.lastName,
                        email: action.email,
                        number: action.number
                    }
                })
        default: {
            return state;
        }
    }
}

export default userReducer