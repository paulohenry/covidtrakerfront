import axios from 'axios';

const apiCovidBrasil = axios.create({
    baseURL: 'https://covid19-brazil-api.now.sh/api/'
})

export default apiCovidBrasil;