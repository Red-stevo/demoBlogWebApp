import {resources} from "../utils.js";
import {ActionTypes} from "../ActionTypes/ActionTypes.js";

/*Action creator that returns a promise, that is a function to fetch all the
* posts from the backend api.*/
export const fetchPost = () => async (dispatch) => {
        const  response = await resources.get("/posts");
        dispatch({type:ActionTypes.FETCH_POST, payload:response.data});
}


/*Action creator return a function to fetch comments and filter comments
*that belong to a specific post.*/
export const fetchComments = (postId) => async (dispatch) => {
        const response = await resources.get("/comments");
        const data = response.data.filter(comment => comment.postId === parseInt(postId.post));
        dispatch({type: ActionTypes.FETCH_COMMENTS, payload: data});
}


/*Action creator to handle use login, and the store the user's name and the backend response
* for later use.*/
export const userLogin = (loginDetails) => async (dispatch) => {
        const response = await resources.post("/login", loginDetails);
        const userData = {
                username:loginDetails.username,
                userToken:response.data.token,
                isLoggedIn:response.data.success
        }
        dispatch({type:ActionTypes.USER_LOGIN, payload:userData});
}