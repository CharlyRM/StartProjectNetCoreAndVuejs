import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:64733/api', // url = base url + request url
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
        MessageBox.confirm('Você foi desconectado, você pode cancelar para permanecer nesta página ou fazer login novamente', 'Confirmar logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          location.reload()
        })
        
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
        message: 'Servidor indisponível',
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service
