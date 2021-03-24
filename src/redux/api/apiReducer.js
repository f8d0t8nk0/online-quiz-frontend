import {
    API_ARCHIVE_QUIZ,
    API_CHANGE_SELECTED_QUESTIONS,
    API_CHECK_ASSIGNMENT, API_CLEAR_SUCCESS,
    API_CREATE_PARSED_QUESTIONS,
    // API_CREATE_QUESTIONS_FAILURE,
    // API_CREATE_QUESTIONS_REQUEST,
    API_CREATE_QUESTIONS_SUCCESS,
    API_CREATE_QUIZ_SUCCESS, API_DELETE_QUIZ, API_GET_ALL_ARCHIVED_QUIZZES, API_GET_ALL_GROUPS,
    API_GET_ALL_QUIZZES,
    API_GET_ALL_ROLES, API_GET_ALL_STUDENT_ASSIGNMENTS,
    API_GET_ALL_TEACHER_ASSIGNMENTS, API_GET_ASSIGNMENT_REPORT, API_GET_UNCOMPLETED_ASS_NUM, API_LOGIN, API_REGISTER,
    API_SAVE_ASSIGNMENT, API_SAVE_GROUP, API_SAVE_GROUP_ASSIGNMENT, API_SAVE_GROUP_ERROR, API_UNARCHIVE_QUIZ
} from "./apiTypes";

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
    getArchivedQuizzes: {
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
    },
    assignmentReport: {
        report: ''
    },
    saveGroup: {
        group: '',
        errorMsg: '',
        success: false,
    },
    allGroups: {
        groups: []
    },
    uncompletedAssNum: {
        num: ''
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
                    questions: [ ...action.payload]
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
            console.log("In reducer API_GET_ALL_TEACHER_ASSIGNMENTS: " + JSON.stringify(action.payload, null, 2));
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

        case API_GET_UNCOMPLETED_ASS_NUM:
            return {
                ...state,
                uncompletedAssNum: {
                    ...state.uncompletedAssNum,
                    num: action.payload
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

        case API_SAVE_GROUP_ASSIGNMENT:
            return state;

        case API_GET_ALL_ROLES:
            return {
                ...state,
                getRoles: {
                    ...state.getRoles,
                    roles: action.payload
                }
            };

        case API_REGISTER:
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
                }
            };

        case API_GET_ASSIGNMENT_REPORT:
            console.log("In reducer API_GET_ASSIGNMENT_REPORT: " + JSON.stringify(action.payload, null, 2));
            return {
                ...state,
                assignmentReport: {
                    ...state.assignmentReport,
                    report: action.payload
                }
            };

        case API_DELETE_QUIZ:

            return {
                ...state,
                getQuizzes: {
                    ...state.getQuizzes,
                    quizzes: state.getQuizzes.quizzes.filter(quiz => quiz.id !== action.payload)
                }
            };

        case API_ARCHIVE_QUIZ:
            return state;

        case API_GET_ALL_ARCHIVED_QUIZZES:
            return {
                ...state,
                getArchivedQuizzes: {
                    ...state.getArchivedQuizzes,
                    quizzes: action.payload
                }
            };

        case API_UNARCHIVE_QUIZ:
            return state;

        case API_SAVE_GROUP:
            console.log("API_SAVE_GROUP: " + JSON.stringify(action.payload, null, 1));
            return {
                ...state,
                saveGroup: {
                    ...state.saveGroup,
                    group: action.payload,
                    errorMsg: '',
                    success: true
                }
            };

        case API_SAVE_GROUP_ERROR:
            console.log("In API_SAVE_GROUP_ERROR");
            console.log("Payload: " + action.payload);
            return {
                ...state,
                saveGroup: {
                    ...state.saveGroup,
                    errorMsg: action.payload
                }
            };

        case API_GET_ALL_GROUPS:
            console.log("API_GET_ALL_GROUPS: "  + action.payload);

            return {
                ...state,
                allGroups: {
                    ...state.allGroups,
                    groups: action.payload
                }
            };

        case API_CLEAR_SUCCESS:
            return {
                ...state,
                saveGroup: {
                    ...state.saveGroup,
                    success: false
                }
            };


        default: return state;
    }

};

export default apiReducer;