import {
    API_CREATE_PARSED_QUESTIONS,
    API_CREATE_QUESTIONS_REQUEST,
    API_CREATE_QUESTIONS_SUCCESS,
    API_CREATE_QUESTIONS_FAILURE,
    API_CREATE_QUIZ_SUCCESS, API_CHANGE_SELECTED_QUESTIONS
} from "./apiTypes";
import {HOST} from '../../config/web';
import {QUESTIONS_CREATE, SAVE_QUIZ} from '../../config/api';
import axios from "axios";
import {firstSelectedIds} from "../gui/guiActions";

export const fetchQuestions = (dto) => {
    return (dispatch, getState) => {
        // dispatch(fetchQuestionsRequest());

        axios.post(`${HOST}${QUESTIONS_CREATE}`, dto)
            .then(response => {
                const data = response.data;
                console.log("Action data: " + JSON.stringify(data, null, 1));
                dispatch(fetchQuestionsSuccess(data));
            });
        return Promise.resolve();
    }
};

export const createAssignment = (dto) => {
    return dispatch => {
        axios.post(`${HOST}${SAVE_QUIZ}`, dto)
            .then(response => {
                const data = response.data;
                dispatch(createAssignmentSuccess(data))
            })
    }

};

const createAssignmentSuccess = quiz => {
    console.log("IN createAssignmentSuccess" + JSON.stringify(quiz, null, 2)); // todo dl
    return {
        type: API_CREATE_QUIZ_SUCCESS,
        payload: quiz
    }
};

const fetchQuestionsRequest = () => {
    // console.log("IN fetchQuestionsRequest"); // todo dl
    return {
        type: API_CREATE_QUESTIONS_REQUEST,
        payload: ''
    }
};

const fetchQuestionsSuccess = questions => {
    console.log("IN fetchQuestionsSuccess"); // todo dl
    return {
        type: API_CREATE_QUESTIONS_SUCCESS,
        payload: [...questions]
    }
};

const fetchQuestionsFailure = error => {
    return {
        type: API_CREATE_QUESTIONS_FAILURE,
        payload: error
    }
};

export const changeSelectedQuestions = (deletedId) => {
    return {
        type: API_CHANGE_SELECTED_QUESTIONS,
        payload: deletedId
    }
};