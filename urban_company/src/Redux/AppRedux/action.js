import * as types from "./actionTypes"
import axios from "axios"

export const getService =(params,payload) =>(dispatch)=>{
    dispatch({type : types.GET_SERVICE_REQUEST})
    return axios.get(`https://urban-company-api.herokuapp.com/api/service`, params)
    .then((res)=>{
        dispatch({type : types.GET_SERVICE_SUCCESS, payload:res.data})
    })
    .catch((err)=>{
        dispatch({type : types.GET_SERVICE_FAILURE, payload:err})
    })
}