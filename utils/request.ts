import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 100000
})

instance.interceptors.request.use(
  (config: any) => {
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: any) => {
    const { code, data } = response.data
    if (code && ![1009, 1003].includes(code)) {
      return Promise.reject(data || '出错了噢')
    }
    return data
  },
  error => {
    return Promise.reject(error || '出错了噢')
  }
)
export default instance
