 import api from '../utils/api';
 import { DELETE_USER, GET_USERS, POST_USER, USER_ERROR } from './types';

 const baseURL = "http://localhost:5000/api";
 

 export const getUsers = () => async (dispatch) => {
    try{
        const res = await api.get(`${baseURL}/employee`);

        dispatch({
            type: GET_USERS,
            payload: res.data
        });

    }catch(err){
        dispatch({
            type: USER_ERROR,
            payload: err.message
        });
    }
 }

 export const postUser = (user) => async (dispatch) => {
     console.log(user);
     try{
        const res = await api.post(`${baseURL}/employee`, user);
        dispatch({
            type: POST_USER,
            payload: res.data
        })
        alert("Employee Saved Successfully");
        getUsers()
     }catch(err){
        dispatch({
            type: USER_ERROR,
            payload: err.message
        });
    }
 }

 export const deleteUser = (id) => async (dispatch) => {
    try{
       const res = await api.delete(`${baseURL}/employee/${id}`);
       dispatch({
           type: DELETE_USER,
           payload: id
       })
       alert("Employee Deleted Successfully");
       getUsers()
    }catch(err){
       dispatch({
           type: USER_ERROR,
           payload: err.message
       });
   }
}