import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {storePostState} from "./Reducers/PostReducer.js";
import {thunk} from "redux-thunk";


const reducers = combineReducers({
    Posts:storePostState,
});

// eslint-disable-next-line no-undef
const composeEnhancer = Window_REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
export const Store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));