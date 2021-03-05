import {GUI_READ_PARSE_QUESTIONS_FIELDS} from "./guiTypes";

const initialState = {
    parseQuestions : {
        questions: '',
        answers: ''
    },
};

const guiReducer = (state = initialState, action) => {
    switch (action.type) {
        case GUI_READ_PARSE_QUESTIONS_FIELDS:
            return {
                ...state,
                parseQuestions: action.payload
            }
        default: return state;
    }
};

export default guiReducer;