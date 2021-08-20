import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:7770/api', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = 'Bearer '.concat(getToken())
    }
    return config
  },
  error => {
    // do something with request error
    // for debug
    return Promise.reject(error)
  }
)

// response interceptor
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
    const res = response;

    if (response.status != 200) {
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (response.status === 50008 || response.status === 50012 || response.status === 50014) {
        // to re-login
        MessageBox.confirm('You have been disconnected, you can cancel to stay on this page or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }

      return Promise.reject(new Error(res.res.data.msg || 'Error'))

    } else {
      return res
    }
  },
  error => {    

    if (error.response.status == 401){     
      location.reload(true);
    }

    if (error.response.status == 404 && error.response.data.msg != undefined){
      Message({
        message: error.response.data.msg,
        type: 'info',
        duration: 5 * 1500
      })
    }

    if (error.response.status == 500) {
      Message({
        message: 'Server is unavailable',
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service
