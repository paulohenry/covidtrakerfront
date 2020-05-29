import axios from 'axios';

const apiCovid = axios.create({
    baseURL: 'https://api.covid19api.com/'
})

export default apiCovid;