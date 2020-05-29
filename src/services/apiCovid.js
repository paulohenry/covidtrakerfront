import axios from 'axios';

const apiCovid = axios.create({
    baseURL: 'https://covid19-brazil-api.now.sh/api/'
})

export default apiCovid;