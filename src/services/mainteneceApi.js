import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const verifyMaintPwd = (pwd) => {
  return api
    .post('/maintenance/unlock', {
      pwd,
    })
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw e
    })
}
