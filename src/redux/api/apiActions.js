import {API_CREATE_PARSED_QUESTIONS,
    API_CREATE_QUESTIONS_REQUEST,
    API_CREATE_QUESTIONS_SUCCESS,
    API_CREATE_QUESTIONS_FAILURE} from "./apiTypes";
import {HOST} from '../../config/web';
import {QUESTIONS_CREATE} from '../../config/api';
import axios from "axios";

export const createQuestions = (data) => dispatch => {
    console.log('Create Qs Action Caller');
    console.log("Url: " + `${HOST}${QUESTIONS_CREATE}`);

    axios.post(`${HOST}${QUESTIONS_CREATE}`, data)
        // .then(res => console.log("Res: " + res))// todo delete later
        // .then(res => res.json())
        .then(response => dispatch({
            type: API_CREATE_PARSED_QUESTIONS,
            payload: response.data
        }));
};

// export const fetchQuestions = (data, dispatch) => {
//     console.log("In fetchQuestions"); // todo dl
//     return () => {
//         dispatch(fetchQuestionsRequest());
//
//         axios.post(`${HOST}${QUESTIONS_CREATE}`, data)
//             // .then(res => console.log("Res: " + res))// todo delete later
//             // .then(res => res.json())
//             // .then(response => dispatch({
//             //     type: API_CREATE_PARSED_QUESTIONS,
//             //     payload: response.data
//             // }))
//             .then(response => {
//                 const data = response.data;
//                 dispatch(fetchQuestionsSuccess(data));
//             })
//             .catch(response => {
//                 const errMsg = response.message;
//                 dispatch(fetchQuestionsFailure(errMsg))
//             });
//     }
// };

export const fetchQuestions = (dto) => {
    console.log("In fetchQuestions"); // todo dl
    return (dispatch) => {
        // dispatch(fetchQuestionsRequest());

        axios.post(`${HOST}${QUESTIONS_CREATE}`, dto)
            .then(response => {
                const data = response.data;
                console.log("Action data: " + JSON.stringify(data));
                dispatch(fetchQuestionsSuccess(data));
            });
            // .catch(response => {
            //     const errMsg = response.message;
            //     dispatch(fetchQuestionsFailure(errMsg))
            // });
        return Promise.resolve();
    }
};

const fetchQuestionsRequest = () => {
    console.log("IN fetchQuestionsRequest"); // todo dl
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