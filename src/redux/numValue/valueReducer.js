import {ADD_NUM} from './types';

const initialState = {
    numVal : 2134
};

const valueReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUM:
            return {
                ...state,
                numVal: state.numVal + 1
            }
        default: return state;
    }
}

export default valueReducer;