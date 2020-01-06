import axios from 'axios';
import {FETCH_COWDATA} from '../store/APIactions/fetchCowData'

axios.get(`https://3f4bvj6fub.execute-api.eu-central-1.amazonaws.com/dev/cows`)
.then(res => {
  FETCH_COWDATA.getCowData(res)
})

console.log('Im in backendConfig')