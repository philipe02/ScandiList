import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000//public_html/',
    timeout: 1000
})

export default api