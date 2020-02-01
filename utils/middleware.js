
import axios from 'axios';
import apiConfig from '../config/api';
import pathToRegExp from 'path-to-regexp';
import cookies from 'js-cookie'
import Router from 'next/router'
import { toast } from 'react-toastify'

axios.interceptors.request.use((config) => {
  return config;
});
axios.interceptors.response.use(response => {
  return response;
}, error => {
 if (error.response.status === 401) {
  toast.error('UnAutorized Access!')
  Router.push('/')
 }
return error;
});

const execute = async (path, method = 'GET', { params = {} , queries = {}, payloads = {}, headers = {} } = {}) => {
  const compiler = pathToRegExp.compile(path);
  const base = apiConfig.apiBaseUrl.replace(/~\/$/, '');
  const url = compiler(params || {});
  var token = cookies.get('token')
  if (token) {
    headers['Authorization'] = `${token}`
  //   if(url=='/getcategories'){
     
  //    }else{
  //       headers['Authorization'] = `${ token }`;
  //     }
   
  }

  if ( ! headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  if ( ! headers['Accept']) {
    headers['Accept'] = 'application/json';
  }

  const options = { method, headers };

  if (method === 'POST' || method === 'PATCH' || method ==='PUT') {
    options.data = payloads;
  }

  if(url=='/profilepic' || url==`/updatecampaign/` || url==`/upload-attachment`){
     options.headers['Content-Type'] = 'multipart/form-data';
  }

  if (queries) {
    options.params = queries;
  }

  options.url = url;
  options.baseURL = base;
  console.log(options)
  return await axios(options);
};


export default {
  get: (path, options) => execute(path, 'GET', options),
  post: (path, options) => execute(path, 'POST', options),
  put: (path, options) => execute(path, 'PUT', options),
  patch: (path, options) => execute(path, 'PATCH', options),
  delete: (path, options) => execute(path, 'DELETE', options),
};
