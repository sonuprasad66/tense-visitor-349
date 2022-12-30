import * as types from "./actionTypes"
import axios from "axios"

export const getService =(params) =>(dispatch)=>{
    dispatch({type : types.GET_SERVICE_REQUEST})
    return axios.get("https://urban-api-vp0s.onrender.com/service", params)
    
    .then((res)=>{
        dispatch({type : types.GET_SERVICE_SUCCESS, payload:res.data})
        
    })
    .catch((err)=>{
        dispatch({type : types.GET_SERVICE_FAILURE, payload:err})
    })
}