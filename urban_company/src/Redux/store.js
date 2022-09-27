import { reducer as AppReducer } from "../Redux/AppRedux/reducer";
import { reducer as AuthReducer } from "../Redux/AuthRedux/reducer";
import thunk from "redux-thunk";
import { combineReducers, applyMiddleware, legacy_createStore } from "redux";

const rootReducer = combineReducers({ AppReducer, AuthReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
