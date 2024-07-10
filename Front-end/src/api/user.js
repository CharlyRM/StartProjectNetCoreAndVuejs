import request from '@/utils/request'
import axios from 'axios';
import qs from 'qs';
import MD5 from "crypto-js/md5";
import { MessageBox, Message } from 'element-ui'
import { getToken } from '@/utils/auth'

const API_BASE_URL = "http://localhost:64733/api"; 

// API Authentication 
export async function login(data) {
  const requestData = {
    username: data.email,
    password: MD5(data.password).toString()
  };
  var result = {};

  await axios.get(API_BASE_URL + 
    '/user/userLogin?' + 
    'username=' + data.email + 
    '&password=' + MD5(data.password).toString())
  .then(function (response) {
    result = response;
  })
  .catch(function (error) {

    if (error.response != undefined){
      if (error.response.status == 400 || error.response.status == 404){
        Message({
          message: 'Nome de usuário ou senha não está correto.',
          type: 'error',
          duration: 5 * 1000
        })              
      }
    }else{
      Message({
        message: 'O servidor de autenticação não está disponível',
        type: 'info',
        duration: 5 * 1000
      });
    }

    return;
  });

  return result;
}

export function getInfo(email) {
  return request({
    url: '/user/getInfoUserLogin',
    method: 'get',
    params: { email }
  })
}

// User management API

export function getUser() {
  return request({
    url: '/user/getUser',
    method: 'get'
  })
}

export function getUserId(idUser) {
  return request({
    url: '/user/getUserId',
    method: 'get',
    params: {idUser}
  })
}

export function saveUser(data) {
  return request({
    url: '/user/saveUser',
    method: 'post',
    data
  })
}

export function saveUserTemp(data) {
  return request({
    url: '/user/saveUserTemp',
    method: 'post',
    data
  })
}

export function saveChangeUser(data) {
  return request({
    url: '/user/saveChangeUser',
    method: 'put',
    data
  })
}

export function deleteUser(idUser) {  
  return request({
    url: '/user/deleteUser',
    method: 'delete',
    params: {idUser}
  })
}
