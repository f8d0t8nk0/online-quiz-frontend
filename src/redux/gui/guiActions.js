import {GUI_CHANGE_SELECTED_IDS, GUI_FIRST_SELECTED_IDS_DISPATCH, GUI_READ_PARSE_QUESTIONS_FIELDS} from "./guiTypes";

export const readParseQuestionsFields = (questionsText, answersText) => dispatch => {
    return {
        type: GUI_READ_PARSE_QUESTIONS_FIELDS,
        payload: {
            questions: questionsText,
            answers: answersText
        }
    }
};

export const changeSelectedIds = (ids) => {
    return {
        type: GUI_CHANGE_SELECTED_IDS,
        payload: [...ids]
    }
};

export const firstSelectedIds = () => (dispatch, getState) => {
    const ids = getState().api.createQReq.questions.map(q => q.id);
    console.log("In firstSelectedIds: " + ids);
    console.log("In firstSelectedIds STATE: " + JSON.stringify(getState(), null, 2));
    dispatch({
        type: GUI_FIRST_SELECTED_IDS_DISPATCH,
            payload: [...ids]
    })
};