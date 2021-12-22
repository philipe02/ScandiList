import axios from 'axios'

const api = axios.create({
    baseURL: 'http://scandilist-api.herokuapp.com/',
    timeout: 30000
})

export default api