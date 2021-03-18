import {
    GUI_CALL_ERROR_SNACKBAR,
    GUI_CHANGE_SELECTED_IDS, GUI_CLEAR_QUIZ_RADIO_OPTIONS,
    GUI_FIRST_SELECTED_IDS_DISPATCH, GUI_GO_TO_FULL_ASSIGNMENT_REPORT,
    GUI_READ_PARSE_QUESTIONS_FIELDS, GUI_REFRESH_APP,
    GUI_SET_QUIZ_RADIO_OPTION
} from "./guiTypes";
import { useHistory } from "react-router-dom";



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
    },
    errorStudentSnackbar: {
        wasOnceCalled: false
    }
};

const guiReducer = (state = initialState, action) => {

    // const history = useHistory();

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

        case GUI_REFRESH_APP:
            window.location.reload(true);
            return state;

        case GUI_CALL_ERROR_SNACKBAR:
            return {
                ...state,
                errorStudentSnackbar: {
                    ...state.errorStudentSnackbar,
                    wasOnceCalled: !state.errorStudentSnackbar.wasOnceCalled
                }
            };

        default: return state;
    }
};

export default guiReducer;