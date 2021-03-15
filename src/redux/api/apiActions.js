import {
    API_CREATE_QUESTIONS_REQUEST,
    API_CREATE_QUESTIONS_SUCCESS,
    API_CREATE_QUESTIONS_FAILURE,
    API_CREATE_QUIZ_SUCCESS,
    API_CHANGE_SELECTED_QUESTIONS,
    API_GET_ALL_TEACHER_ASSIGNMENTS,
    API_CHECK_ASSIGNMENT,
    API_GET_ALL_QUIZZES,
    API_SAVE_ASSIGNMENT,
    API_GET_ALL_ROLES,
    API_REGISTER,
    API_LOGIN,
    API_GET_ALL_STUDENT_ASSIGNMENTS, API_GET_ASSIGNMENT_REPORT
} from "./apiTypes";
import {HOST} from '../../config/web';
import {
    ALL_ROLES,
    CHECK_ASSIGNMENT,
    GET_ALL_QUIZZES, GET_ALL_STUDENT_ASSIGNMENTS,
    GET_ALL_TEACHER_ASSIGNMENTS, GET_ASSIGNMENT_REPORT, LOGIN,
    QUESTIONS_CREATE, REGISTER, SAVE_ASSIGNMENT,
    SAVE_QUIZ
} from '../../config/api';
import axios from "axios";
import {refreshApp} from "../gui/guiActions";


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
    // console.log("IN createAssignmentSuccess" + JSON.stringify(quiz, null, 2)); // todo dl
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
    // console.log("IN fetchQuestionsSuccess"); // todo dl
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
    // console.log("IN fetchTeacherAssignments"); // todo dl
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

export const fetchStudentAssignments = () => {
    console.log("IN fetchStudentAssignments"); // todo dl
    return dispatch => {
        axios.get(`${HOST}${GET_ALL_STUDENT_ASSIGNMENTS}`)
            .then(response => {
                console.log("IN fetchStudentAssignments inside: " + JSON.stringify(response.data, null, 2));
                dispatch({
                    type: API_GET_ALL_STUDENT_ASSIGNMENTS,
                    payload: response.data
                })
            })
    }
};

export const checkAssignment = dto => {
    // console.log("IN checkAssignment"); // todo dl
    return dispatch => {
        axios.post(`${HOST}${CHECK_ASSIGNMENT}`, dto)
            .then(response => {
                // console.log("IN checkAssignment inside: " + JSON.stringify(response.data, null, 2));
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
                // console.log("IN fetchQuizzes inside: " + JSON.stringify(response.data, null, 2));
                dispatch({
                    type: API_GET_ALL_QUIZZES,
                    payload: response.data
                })
            })
    }
};

export const saveAssignment = (dto) => {
    // console.log("IN saveAssignment"); // todo dl
    return dispatch => {
        axios.post(`${HOST}${SAVE_ASSIGNMENT}`, dto)
            .then(response => {
                // console.log("IN saveAssignment inside: " + JSON.stringify(response.data, null, 2));
                dispatch({
                    type: API_SAVE_ASSIGNMENT,
                    payload: response.data
                })
            })
    }
};

export const fetchRoles = () => {
    return dispatch => {
        axios.get(`${HOST}${ALL_ROLES}`)
            .then(response => {
                console.log("IN fetchRoles inside: " + JSON.stringify(response.data, null, 2));
                dispatch({
                    type: API_GET_ALL_ROLES,
                    payload: response.data
                })
            })
    }
};

export const registerNewUser = dto => {
    return dispatch => {
        axios.post(`${HOST}${REGISTER}`, dto)
            .then(response => {
                console.log("IN registerNewUser inside: " + JSON.stringify(response.data, null, 2));
                dispatch({
                    type: API_REGISTER,
                    payload: response.data
                })
            })
    }
};

export const login = dto => {
    return async (dispatch) => {
        await axios.post(`${HOST}${LOGIN}`, dto)
            .then(response => {

                let loginDTO = response.data.loginDTO;
                let jwtToken = loginDTO.token;

                console.log("LoginDTO: " + JSON.stringify(loginDTO, null, 1))

                localStorage.setItem('jwtToken', jwtToken);
                localStorage.setItem('username', loginDTO.username);
                console.log("Token: " + jwtToken);

                dispatch({
                    type: API_LOGIN,
                    payload: loginDTO
                });
            }).catch(err => {
            console.log(err);
        });
        dispatch(refreshApp());
    }
};

export const fetchAssignmentReport = (dto) => {
    return dispatch => {
        axios.get(`${HOST}${GET_ASSIGNMENT_REPORT}${dto}`)
            .then(response => {
                dispatch({
                    type: API_GET_ASSIGNMENT_REPORT,
                    payload: response.data
                })
            })
    }
};