import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import {loadState, saveState} from "./localStorageState";
import throttle from "lodash/throttle";

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

const updateInterval = 1000;

store.subscribe(throttle(() => {
    saveState({
        api: store.getState().api
    })
}, updateInterval));

export default store;