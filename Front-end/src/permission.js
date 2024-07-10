import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // check if the user is logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if you are logged in, redirect to the homepage
      next({ path: '/' })
      NProgress.done()
    } else {
      // determine if the user has obtained their permission roles through getInfo
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // get user information
          // Note: the functions must be an array of objects! such as: ['admin'] or ,['developer','editor']
          console.log("teste 01")
          const { administrator } = await store.dispatch('user/getInfo')

          let roles = [];

          if (administrator == 'S'){
            roles.push('admin')
          }
          
          if (administrator == 'N'){
            roles.push('editor')
          }

          // generate accessible route maps based on functions
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

          // dynamically add accessible routes
          router.addRoutes(accessRoutes)

          // hack method to ensure addRoutes is complete
          // set replace: true, so that navigation does not leave a historical record
          
          next({ ...to, replace: true })
        } catch (error) {
          // remove the token and go to the login page to log in again
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that are not allowed to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
