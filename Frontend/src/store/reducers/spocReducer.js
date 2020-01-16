import {FETCH_USER} from '../APIactions/fetchUser'

const initState = {
    spocs: [
        {userId: 'tku3DN8rpYEnBtP0bQtSph6nlBVPZLig',
        firstName: 'John',
        lastName: 'Vermehren',
        email: 'john.vermehren@tum.de',
        role: 'Vet',
        chatRoomId: 'OkpVwXgZ4CM5MHVIR6q0NvSey4uN2Dn4'
        },
        {userId: 'JENu3DN8rpYEnBtP0bQtSph6nlBVPZLig',
        firstName: 'Adrian',
        lastName: 'Ziegler',
        email: 'adrian.ziegler@tum.de',
        role: 'Consultant',
        chatRoomId: 'JENOkpVwXgZ4CM5MHVIR6q0NvSey4uN2Dn4'
        },
    ],
}


const spocReducer = (state = initState, action) => {
    switch(action.type) {
        case FETCH_USER:
            return {
                ...state,
                ...action.spocs};
        default:
            return state;
    }
       
}

export default spocReducer