import {
    API_CREATE_PARSED_QUESTIONS,
    API_CREATE_QUESTIONS_FAILURE,
    API_CREATE_QUESTIONS_REQUEST,
    API_CREATE_QUESTIONS_SUCCESS
} from "./apiTypes";

// const initialState = {
//     createdQuestions: []
// };

const initialState = {
    createQReq : {
        loading : false,
        questions: [],
        error: ''
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
            console.log("In reducer: " + JSON.stringify(action.payload));
            // createQReq = {
            //     loading: false,
            //     questions: [...state.createQReq.questions ,...action.payload],
            //     error: ''
            // };
            let obj = {
                ...state,
                createQReq: {
                    ...state.createQReq,
                    questions: [...state.createQReq.questions, ...action.payload]
                }
            };
            console.log("My obj: " + JSON.stringify(obj));
            return obj;

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

        default: return state;
    }

};

export default apiReducer;