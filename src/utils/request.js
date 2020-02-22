import axios from 'axios'
import baseUrl from "../constant/baseUrl";
import {MessageBox, Message} from "element-ui";
// 获取环境变量
const ENVIRONMENT = process.env.NODE_ENV;

const service = axios.create({
  baseURL: baseUrl[ENVIRONMENT]['baseUrl'] + baseUrl[ENVIRONMENT]['prefix'],
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  // 在向服务器发送请求前，序列化请求数据
  transformRequest: [function (data) {
    data = JSON.stringify(data)
    return data
  }],
  // 在传递给 then/catch 前，修改响应数据
  transformResponse: [function (data) {
    if (typeof data === 'string' && data.startsWith('{')) {
      data = JSON.parse(data)
    }
    return data
  }]
})

// 请求拦截
service.interceptors.request.use(
  config => {
    /* // 在请求发送之前检查token
     if (store.getters.token) {
       config.headers['X-Token'] = getToken();
     }*/
    return config
  },
  error => {
    // 请求错误时操作
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截

service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */
  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    /**
     * 20000  数据请求成功
     * 50008  非法token
     * 50012  客户端登录
     * 50014  token过期
     */
    // 处理状态码!=20000的情况
    /*  if (res.code !== 20000) {
        Message({
          message: res.message || 'Error',
          type: 'error',
          duration: 5 * 1000
        })

        // 50008: Illegal token; : Other clients logged in; 50014: Token expired;
        if (res.code === 50008 || res.code === 50012 || res.code === 50014) {// 跳转登录页
          MessageBox.confirm(
            'You have been logged out, you can cancel to stay on this page, or log in again',
            'Confirm logout',
            {
              confirmButtonText: 'Re-Login',
              cancelButtonText: 'Cancel',
              type: 'warning'
            }).then(() => {
            store.dispatch('user/resetToken').then(() => {
              location.reload()
            })
          })
        }
        return Promise.reject(new Error(res.message || 'Error'))
      } else {
        return res
      }*/
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
