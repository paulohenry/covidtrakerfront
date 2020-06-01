import axios from 'axios';

const apiCovidCity = axios.create({
    baseURL: 'https://covid19-brazil-api.now.sh/api/'
})

export default apiCovidCity;