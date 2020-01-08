import {FETCH_COWDATA} from '../APIactions/fetchCowData';

const initState = {
    cow_data: null
}

const getCowDataReducer = (state = initState, action) => {
    console.log("InCowDataReducer - Action_PAYLOAD: ", action.payload)
    switch (action.type) {
        case FETCH_COWDATA: {
            return {
                ...state, 
                cow_data: action.payload.data
            } 
        }

        default: {
            return state;
        }
    }



}

console.log("InCowDataReducer", initState.cow_data)

export default getCowDataReducer