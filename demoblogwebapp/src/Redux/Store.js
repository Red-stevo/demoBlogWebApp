import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {storePostState} from "./Reducers/PostReducer.js";
import {thunk} from "redux-thunk";


const reducers = combineReducers({
    Posts:storePostState,
});

// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));