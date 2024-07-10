import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const EmailKey = 'Admin-Email'
const IdUserKey = 'Admin-IdUser'
const PublicKey = 'Admin-PublicKey'
const InitialDataKey = 'Admin-InitialData'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getEmail() {
  return Cookies.get(EmailKey)
}

export function setEmail(email) {
  return Cookies.set(EmailKey, email)
}

export function removeEmail() {
  return Cookies.remove(EmailKey)
}

export function getIdUser() {
  return Cookies.get(IdUserKey)
}

export function setIdUser(IdUser) {
  return Cookies.set(IdUserKey, IdUser)
}

export function removeIdUser() {
  return Cookies.remove(IdUserKey)
}

export function getPublicKey() {
  return Cookies.get(IdUserKey)
}

export function setPublicKey(key) {
  return Cookies.set(PublicKey, key)
}

export function removePublicKey() {
  return Cookies.remove(PublicKey)
}

export function setInitialDataKey(key) {
  return Cookies.set(InitialDataKey, key)
}

export function removeInitialDataKey() {
  return Cookies.remove(InitialDataKey)
}

