import axios from 'axios'

const URL = 'http://localhost:5000/'

const instance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: localStorage.getItem('access-token')
  },
})

export function setHeaders(header, value) {
  if (header && value) {
    instance.defaults.headers[header] = value
  }
}

export default instance