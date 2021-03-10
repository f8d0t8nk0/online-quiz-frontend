import {combineReducers} from 'redux';
import guiReducer from './gui/guiReducer'
import apiReducer from "./api/apiReducer";

export default combineReducers({
        gui: guiReducer,
        api: apiReducer
    }
)