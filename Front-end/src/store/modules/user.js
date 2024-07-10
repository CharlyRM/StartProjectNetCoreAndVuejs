import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken, getEmail, setEmail, removeEmail, setIdUser, getIdUser, removeIdUser, setPublicKey, removePublicKey } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  email: getEmail(),
  name: '',
  avatar: '',
  intro: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_EMAIL: (state, email) => {
    state.email = email
  },  
  SET_INTRODUCTION: (state, intro) => {
    state.intro = intro
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {

  // login 
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.access_token)
        commit('SET_EMAIL', userInfo.email)
        setToken(data.access_token)
        setEmail(userInfo.email)
        resolve()
      }).catch(error => {    
        reject(error)
      })
    })
  },

  // fetch user information
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.email).then(response => {
        const { data } = response

        if (!data) {
          reject('Falha na verificação, faça login novamente.')
        }

        const { administrator, name, avatar, intro, public_key_payment } = data

        if (administrator == '') {
          reject('getInfo: as funções devem ser uma matriz não nula!')
        }

        let roles = [];

        if (administrator == 'S'){
          roles.push('admin')
        }
        else{
          roles.push('editor')
        }

        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', intro)

        setIdUser(data.user.idUser);
        setPublicKey(public_key_payment);
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // logout 
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        removeEmail()
        removeIdUser()
        removePublicKey()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remover token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      removeEmail()
      removeIdUser()
      resolve()
    })
  },

  // modify permissions dynamically
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)
      
      const { roles } = await dispatch('getInfo')
      
      resetRouter()
      
      // generate accessible route map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
