import {ActionTypes} from "../ActionTypes/ActionTypes.js";


const initialState = [];

export const storePostState = (state = initialState, {action, payload}) => {
    if(action === ActionTypes.FETCH_POST){
            return [...state, ...payload];
    }else {
        return state;
    }
}