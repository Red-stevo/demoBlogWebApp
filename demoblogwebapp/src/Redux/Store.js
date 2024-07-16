import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {storePostComments, storePostState} from "./Reducers/PostReducer.js";
import {thunk} from "redux-thunk";


const reducers = combineReducers({
    Posts:storePostState,
    comments:storePostComments,
});

// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));