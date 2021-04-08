import axios from 'axios'

const api = axios.create({
  baseURL: 'https://todo-metodologiaead.herokuapp.com/'
})

export default api