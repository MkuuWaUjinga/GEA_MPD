import axios from 'axios';

export const FETCH_COWDATA = "FETCH_COWDATA";

const request = axios.get(`https://3f4bvj6fub.execute-api.eu-central-1.amazonaws.com/dev/cows`)
.then(res => {
  getCowData(res.data)
})


export function getCowData(request) {
    console.log('this is the request in cowdata',request)
    return {
        type: 'FETCH_COWDATA',
        payload: request
    }
}