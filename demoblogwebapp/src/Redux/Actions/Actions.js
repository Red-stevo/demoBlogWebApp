import {resources} from "../utils.js";
import {ActionTypes} from "../ActionTypes/ActionTypes.js";


export const fetchPost = () => async (dispatch) => {
        const  response = await resources.get("/posts");
        dispatch({type:ActionTypes.FETCH_POST, payload:response.data});
}

export const setPosts = (posts) => {
    return{
        type: ActionTypes.FETCH_POST,
        payload:posts
    }
}