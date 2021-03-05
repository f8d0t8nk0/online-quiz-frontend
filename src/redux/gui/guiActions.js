import {GUI_READ_PARSE_QUESTIONS_FIELDS} from "./guiTypes";

export const readParseQuestionsFields = (questionsText, answersText) => dispatch => {
    return {
        type: GUI_READ_PARSE_QUESTIONS_FIELDS,
        payload: {
            questions: questionsText,
            answers: answersText
        }
    }
};