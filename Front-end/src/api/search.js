import request from '@/utils/request'

export function getPagedSearchBasic(page, count, userId, emailUser) {
  return request({
    url: '/search/getPagedSearchBasic',
    method: 'get',
    params: {page, count, userId, emailUser}
  })
}

export function getSearchInicialData() {
  return request({
    url: '/search/getSearchInicialData',
    method: 'get'
  })
}

export function getSearchBusinessId(idUser, idCadastroSearch) {
  return request({
    url: '/search/getSearchBusinessId',
    method: 'get',
    params: {idUser, idCadastroSearch}
  })
}

export function deleteSearch(idUser, idSearch) {  
  return request({
    url: '/search/deleteSearch',
    method: 'delete',
    params: {idUser, idSearch}
  })
}

export function saveExecuteSearch(
    idUser,
    idCategory,
    idCity,
    idDistrict,
    searchLocal, 
    searchLocation) {
  return request({
    url: '/search/saveExecuteSearch',
    method: 'post',
    params: {
      idUser,
      idCategory,
      idCity,
      idDistrict,
      searchLocal, 
      searchLocation}
  })
}
