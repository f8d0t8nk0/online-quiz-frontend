import {
    API_CHANGE_SELECTED_QUESTIONS,
    API_CREATE_PARSED_QUESTIONS,
    API_CREATE_QUESTIONS_FAILURE,
    API_CREATE_QUESTIONS_REQUEST,
    API_CREATE_QUESTIONS_SUCCESS,
    API_CREATE_QUIZ_SUCCESS
} from "./apiTypes";

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
    }
};

const apiReducer = (state = initialState, action) => {
    // let createQReq;
    switch (action.type) {
        case API_CREATE_PARSED_QUESTIONS:
            console.log("In reducer: " + JSON.stringify(action.payload));
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

        default: return state;
    }

};

export default apiReducer;