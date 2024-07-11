import {ActionTypes} from "../ActionTypes/ActionTypes.js";


const initialState = [];

export const storePostState = (state = initialState, {type, payload}) => {
    if(type === ActionTypes.FETCH_POST){
        console.log(payload);
            return [...state, ...payload];
    }else {
        return state;
    }
}