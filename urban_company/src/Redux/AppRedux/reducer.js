import * as types from "./actionTypes"

const initialState ={
    service:[],
    isLoading:false,
    isError:false
}

export const reducer =(oldState = initialState, action)=>{
    const {type,payload} = action
    switch(type){
        default:
            return oldState
        case types.GET_SERVICE_REQUEST:
          return  {...oldState,isLoading:true,isError:false}
        case types.GET_SERVICE_SUCCESS:
            return {...oldState, service:payload,isLoading:false, isError:false}
        case types.GET_SERVICE_FAILURE:
            return {...oldState, service:[], isLoading:false, isError:true}      
    }
}