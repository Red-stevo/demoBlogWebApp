import {ActionTypes} from "../ActionTypes/ActionTypes.js";


const initialState = {
    username:"",
    userToken:"",
    isLoggedIn: false,
};

export const userLoginReducer = (state = initialState, {type, payload}) => {
    if(type === ActionTypes.USER_LOGIN)
        return payload;
    else
        return state;
}