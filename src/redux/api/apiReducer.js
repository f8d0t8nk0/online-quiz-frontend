import {
    API_CHANGE_SELECTED_QUESTIONS,
    API_CHECK_ASSIGNMENT,
    API_CREATE_PARSED_QUESTIONS,
    // API_CREATE_QUESTIONS_FAILURE,
    // API_CREATE_QUESTIONS_REQUEST,
    API_CREATE_QUESTIONS_SUCCESS,
    API_CREATE_QUIZ_SUCCESS,
    API_GET_ALL_QUIZZES,
    API_GET_ALL_ROLES, API_GET_ALL_STUDENT_ASSIGNMENTS,
    API_GET_ALL_TEACHER_ASSIGNMENTS, API_LOGIN, API_REGISTER,
    API_SAVE_ASSIGNMENT
} from "./apiTypes";
import {act} from "@testing-library/react";

// const initialState = {
//     createdQuestions: []
// };

const initialState = {
    createQReq : {
        loading : false,
        questions: [],
        error: ''
    },
    createQuiz : {
        quiz: '',
        selectedIds: []
    },
    getTeachAssign : {
        assignments: []
    },
    checkAssignment: {
        report: ''
    },
    getQuizzes: {
        quizzes: []
    },
    getRoles: {
        roles: []
    },
    registerUser: {
        user : ''
    },
    login: {
        loginDTO: '',
        // username: ''
    }
};

const apiReducer = (state = initialState, action) => {
    // let createQReq;
    switch (action.type) {
        case API_CREATE_PARSED_QUESTIONS:
            // console.log("In reducer: " + JSON.stringify(action.payload));
            return {
                ...state,
                createdQuestions: action.payload
            };
        // case API_CREATE_QUESTIONS_REQUEST:
        //     createQReq = {
        //         ...state.createQReq,
        //         loading: true
        //     };
        //
        //     return {
        //         ...state,
        //         createQReq
        //     };

        case API_CREATE_QUESTIONS_SUCCESS:
            // console.log("In reducer: " + JSON.stringify(action.payload));
            // createQReq = {
            //     loading: false,
            //     questions: [...state.createQReq.questions ,...action.payload],
            //     error: ''
            // };
            // console.log("My obj: " + JSON.stringify(obj));
            return {
                ...state,
                createQReq: {
                    ...state.createQReq,
                    questions: [...state.createQReq.questions, ...action.payload]
                }
            };

        // case API_CREATE_QUESTIONS_FAILURE:
        //     createQReq = {
        //         loading: false,
        //         questions: [],
        //         error: action.payload
        //     };
        //     return {
        //         ...state,
        //         createQReq
        //     };

        case API_CREATE_QUIZ_SUCCESS:
            console.log("In reducer API_CREATE_QUIZ_SUCCESS: " + JSON.stringify(action.payload, null, 2));

            return {
                ...state,
                createQuiz: {
                    ...state.createQuiz,
                    quiz: action.payload
                }
            };

        case API_CHANGE_SELECTED_QUESTIONS:
            return {
                ...state,
                createQReq: {
                    ...state.createQReq,
                    questions: state.createQReq.questions.filter(q => {
                        return q.id !== action.payload;
                    })
                }
            };

        case API_GET_ALL_TEACHER_ASSIGNMENTS:
            // console.log("In reducer API_GET_ALL_TEACHER_ASSIGNMENTS: " + JSON.stringify(action.payload, null, 2));
            return {
                ...state,
                getTeachAssign: {
                    ...state.getTeachAssign,
                    assignments: [...action.payload]
                }
            };

        case API_GET_ALL_STUDENT_ASSIGNMENTS:
            return {
                ...state,
                getTeachAssign: {
                    ...state.getTeachAssign,
                    assignments: [...action.payload]
                }
            };

        case API_CHECK_ASSIGNMENT:
            // console.log("In reducer API_CHECK_ASSIGNMENT: " + JSON.stringify(action.payload, null, 2));
            return {
                ...state,
                checkAssignment: {
                    ...state.checkAssignment,
                    report: action.payload
                }
            };

        case API_GET_ALL_QUIZZES:
            // console.log("In reducer API_GET_ALL_QUIZZES: " + JSON.stringify(action.payload, null, 2));
            return {
                ...state,
                getQuizzes: {
                    ...state.getQuizzes,
                    quizzes: action.payload
                }
            };

        case API_SAVE_ASSIGNMENT:
            // console.log("In reducer API_SAVE_ASSIGNMENT: " + JSON.stringify(action.payload, null, 2));
            return state; // no need to save saved assignment id


        case API_GET_ALL_ROLES:
            console.log("In reducer API_GET_ALL_ROLES: " + JSON.stringify(action.payload, null, 2));
            return {
                ...state,
                getRoles: {
                    ...state.getRoles,
                    roles: action.payload
                }
            };

        case API_REGISTER:
            console.log("In reducer API_REGISTER: " + JSON.stringify(action.payload, null, 2));
            return {
                ...state,
                registerUser: {
                    ...state.registerUser,
                    user: action.payload
                }
            };

        case API_LOGIN:
            return {
                ...state,
                login: {
                    ...state.login,
                    loginDTO: action.payload,
                    // username: action.payload
                }
            };

        default: return state;
    }

};

export default apiReducer;