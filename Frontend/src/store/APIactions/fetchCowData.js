import axios from 'axios';

export const FETCH_COWDATA = "FETCH_COWDATA";

/*
const request = axios.get(`https://3f4bvj6fub.execute-api.eu-central-1.amazonaws.com/dev/cows`)
.then(res => {
  getCowData(res.data)
})
*/

export const fetchCowData = () => {
  return (dispatch) => {
    fetch(`https://3f4bvj6fub.execute-api.eu-central-1.amazonaws.com/dev/cows`)
      .then(res => res.json())
      .then(cows => {
        dispatch({
          type: FETCH_COWDATA,
          payload: cows
        })
      })
  }
}