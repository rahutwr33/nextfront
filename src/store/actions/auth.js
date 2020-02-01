import { 
    LOGIN_TYPE,
    REGISTER_TYPE,
    CURRENT_USER, 
    LOGOUT
   } from '../action-type';
 
 import axios from '../../utils/middleware';
 
 export const loginUser = payloads => dispatch => axios.post('/login',
   { payloads }).then((res) => {    
     if (res.data['success']) {
       dispatch({ type: LOGIN_TYPE,  payload:res.data });
     }
     return res.data;
   }).catch((error) => {
     console.log('catch login err',error)
     const res = { success:false, message: 'Something went wrong,please try again' };
     return res;
 });
 
 export const register = payloads => dispatch => axios.post('/register',
   { payloads }).then((res) => {
     if (res['data'].code==200) {
       dispatch({type: REGISTER_TYPE, payload:res.data });
     }
     return res.data
   }).catch((error) => {
     const res = {  message: error.response.data };
     return res;
 });

 export const logout = payloads => dispatch => new Promise((resolve, reject)=>{
    dispatch({type: LOGOUT })
    resolve()
 })
 

 export const checkauth = payloads => dispatch => axios.get('/checkauth',
 { payloads }).then((res) => {
  if (res['data'].success) {
    dispatch({type: CURRENT_USER, payload:res['data']['data'] });
  }
   return res;
 }).catch((error) => {
   const res = { success : false, message: 'Something went wrong,please try again' };
   return res;
});

export const getmetaData = payloads => dispatch => axios.get('/metas',
 { payloads }).then((res) => {
   return res;
 }).catch((error) => {
   const res = { success : false, message: 'Something went wrong,please try again' };
   return res;
});
 
 export const forgot_password = payloads => dispatch => axios.post('/forgotpassword?mobile=true',
   { payloads }).then((res) => {
     console.log('forgot password re',res.data)
     return res.data;
 
   }).catch((error) => {
     const res = {  message: 'Something went wrong,please try again' };
     return res;
 });
 
 
 
 
 
 