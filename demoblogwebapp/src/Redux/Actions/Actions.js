import {resources} from "../utils.js";
import {ActionTypes} from "../ActionTypes/ActionTypes.js";


export const fetchPost = () => async (dispatch, getState) => {
        const  response = await resources.get("/posts");
        dispatch(ActionTypes.FETCH_POST, response.data);
    }
}

export const setPosts = (posts) => {
    return{
        type: ActionTypes.FETCH_POST,
        payload:posts
    }
}