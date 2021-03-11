import {
    API_CREATE_QUESTIONS_REQUEST,
    API_CREATE_QUESTIONS_SUCCESS,
    API_CREATE_QUESTIONS_FAILURE,
    API_CREATE_QUIZ_SUCCESS,
    API_CHANGE_SELECTED_QUESTIONS,
    API_GET_ALL_TEACHER_ASSIGNMENTS,
    API_CHECK_ASSIGNMENT,
    API_GET_ALL_QUIZZES
} from "./apiTypes";
import {HOST} from '../../config/web';
import {
    CHECK_ASSIGNMENT,
    GET_ALL_QUIZZES,
    GET_ALL_TEACHER_ASSIGNMENTS,
    QUESTIONS_CREATE,
    SAVE_QUIZ
} from '../../config/api';
import axios from "axios";

export const fetchQuestions = (dto) => {
    return (dispatch) => {
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

// const fetchQuestionsRequest = () => {
//     // console.log("IN fetchQuestionsRequest"); // todo dl
//     return {
//         type: API_CREATE_QUESTIONS_REQUEST,
//         payload: ''
//     }
// };

const fetchQuestionsSuccess = questions => {
    console.log("IN fetchQuestionsSuccess"); // todo dl
    return {
        type: API_CREATE_QUESTIONS_SUCCESS,
        payload: [...questions]
    }
};

// const fetchQuestionsFailure = error => {
//     return {
//         type: API_CREATE_QUESTIONS_FAILURE,
//         payload: error
//     }
// };

export const changeSelectedQuestions = (deletedId) => {
    return {
        type: API_CHANGE_SELECTED_QUESTIONS,
        payload: deletedId
    }
};

export const fetchTeacherAssignments = () => {
    console.log("IN fetchTeacherAssignments"); // todo dl
    return dispatch => {
        axios.get(`${HOST}${GET_ALL_TEACHER_ASSIGNMENTS}`)
            .then(response => {
                dispatch({
                    type: API_GET_ALL_TEACHER_ASSIGNMENTS,
                    payload: response.data
                })
            })
    }
};

export const checkAssignment = dto => {
    console.log("IN checkAssignment"); // todo dl
    return dispatch => {
        axios.post(`${HOST}${CHECK_ASSIGNMENT}`, dto)
            .then(response => {
                console.log("IN checkAssignment inside: " + JSON.stringify(response.data, null, 2));
                dispatch({
                    type: API_CHECK_ASSIGNMENT,
                    payload: response.data
                })
            })
    }
};

export const fetchQuizzes = () => {
    return dispatch => {
        axios.get(`${HOST}${GET_ALL_QUIZZES}`)
            .then(response => {
                console.log("IN fetchQuizzes inside: " + JSON.stringify(response.data, null, 2));
                dispatch({
                    type: API_GET_ALL_QUIZZES,
                    payload: response.data
                })
            })
    }
};