import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截
service.interceptors.request.use((config) => {
  config.headers.icode = 'FDD8A547D2E81512'
  return config
})

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    // 根据 success 的状态决定下面的操作
    if (success) {
      return data
    } else {
      // 业务错误
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default service
