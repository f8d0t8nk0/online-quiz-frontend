import {
    GUI_CHANGE_SELECTED_IDS, GUI_CLEAR_QUIZ_RADIO_OPTIONS,
    GUI_FIRST_SELECTED_IDS_DISPATCH,
    GUI_READ_PARSE_QUESTIONS_FIELDS,
    GUI_SET_QUIZ_RADIO_OPTION
} from "./guiTypes";
import {useSelector} from "react-redux";


const initialState = {
    parseQuestions : {
        questions: '',
        answers: ''
    },
    createAssignment: {
        selectedId: []
    },
    conductQuiz: {
        selectedOptions: []
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

        case GUI_SET_QUIZ_RADIO_OPTION:

            let options = state.conductQuiz.selectedOptions;

            let exists = false;
            for (let i = 0; i < options.length; i++) {
                let option = options[i];
                if (option.hasOwnProperty("qid") &&
                    option.hasOwnProperty("selection")) {
                    if (option.qid === action.payload.qid) {
                        // already there => replace it with new value
                        options[i] = action.payload;
                        exists = true;
                        break;
                    }
                }
            }
            if (!exists) {
                // first time here
                options.push(action.payload);
            }

            let obj = {
                ...state,
                conductQuiz: {
                    ...state.conductQuiz,
                    selectedOptions: [...options]
                }
            };
            console.log("In GUI reducer: " + JSON.stringify(obj, null, 1));
            return obj;

        case GUI_CLEAR_QUIZ_RADIO_OPTIONS:
            return {
                ...state,
                conductQuiz: {
                    ...state.conductQuiz,
                    selectedOptions: []
                }
            };

        default: return state;
    }
};

export default guiReducer;