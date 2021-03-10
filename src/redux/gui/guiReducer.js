import {GUI_CHANGE_SELECTED_IDS, GUI_FIRST_SELECTED_IDS_DISPATCH, GUI_READ_PARSE_QUESTIONS_FIELDS} from "./guiTypes";
import {useSelector} from "react-redux";


const initialState = {
    parseQuestions : {
        questions: '',
        answers: ''
    },
    createAssignment: {
        selectedId: []
    }
};

const guiReducer = (state = initialState, action) => {
    switch (action.type) {
        case GUI_READ_PARSE_QUESTIONS_FIELDS:
            return {
                ...state,
                parseQuestions: action.payload
            };

        case GUI_CHANGE_SELECTED_IDS:
            console.log("In GUI reducer " + JSON.stringify(action.payload, null, 2))
            return {
                ...state,
                createAssignment: {
                    ...state.createAssignment,
                    selectedId: action.payload
                }
            };

        case GUI_FIRST_SELECTED_IDS_DISPATCH:

            return {
                ...state,
                createAssignment: {
                    ...state.createAssignment,
                    selectedId: action.payload
                }
            };
        default: return state;
    }
};

export default guiReducer;