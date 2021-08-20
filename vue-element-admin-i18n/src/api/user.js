import request from '@/utils/request'
import axios from 'axios';
import qs from 'qs';
import MD5 from "crypto-js/md5";
import { MessageBox, Message } from 'element-ui'
import { getToken } from '@/utils/auth'

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

const API_CLIENT_ID = '1';
const API_CLIENT_SECRET = 'wZ8Ou5Hq';
const API_BASE_URL = "http://localhost:5000"; 
const API_GRANT_TYPE = "password"; 
const API_SCOPE = "api.painel";  
const API_TIMEOUT = 30000; 

// API Authentication

export async function login(data) {
  
  const axiosConfig = {
    baseURL: API_BASE_URL,
    timeout: API_TIMEOUT,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  const requestData = {
    client_id: API_CLIENT_ID,
    client_secret: API_CLIENT_SECRET,
    grant_type: API_GRANT_TYPE,
    username: data.email,
    password: MD5(data.password).toString(),
    scope: API_SCOPE
  };
  
  var result = {};

  console.log(requestData);

  await axios.post('/connect/token', qs.stringify(requestData), axiosConfig)
  .then(function (response) {
    result = response;
  })
  .catch(function (error) {

    if (error.response != undefined){
      if (error.response.status == 400){
        Message({
          message: 'Username or password is not correct.',
          type: 'error',
          duration: 5 * 1000
        })              
      }
    }else{
      Message({
        message: 'Authentication server is not available',
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

export async function logout(token) {
  try {
    const response = await axios.get(API_BASE_URL + '/connect/endsession?id_token_hint=' + token);
  } catch (error) {
    console.error(error);
  }
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

