import axios from 'axios'

const api = axios.create({
    baseURL: 'https://localhost:8080/api/',
    timeout: 1000
})

export default api