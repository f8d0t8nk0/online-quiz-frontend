import React, {useState} from 'react';
import ParseQuestions from "../components/question/ParseQuestions";
import CreateAssignment from "../components/CreateAssignment";
import MyQuizzes from "./MyQuizzes";
import {useSelector} from "react-redux";

const UploadQuiz = props => {

    // const [questions, setQuestions] = useState(useSelector(state => {
    //     console.log("In useSelector PARENT: " + JSON.stringify(state));
    //     return state.api.createQReq.questions;
    // }));
    const questions = useSelector(state => {
            console.log("In useSelector PARENT: " + JSON.stringify(state));
            return state.api.createQReq.questions;
        });
    // const [questions, setQuestions] = useSelector(state => {
    //     console.log("In useSelector PARENT: " + JSON.stringify(state));
    //     return state.api.createQReq.questions;
    // });
    const [step, setStep] = useState(1);
    const [quizzes, setQuizzes] = useState([]);
    const [selectedQIds, setSelectedQIds] = useState([]);


    const nextStep = () => {
        setStep(step + 1);
    };

    switch (step) {
        case 1:
            return <ParseQuestions
                nextStep={nextStep}
                quizzes={quizzes}
                setQuizzes={setQuizzes}
                selectedQIds={selectedQIds}
                questions={questions}
                // setQuestions={setQuestions}
                setSelectedQIds={setSelectedQIds}
            />;
        case 2:
            return <CreateAssignment
                nextStep={nextStep}
                quizzes={questions}
                selectedQIds={selectedQIds}
                setSelectedQIds={setSelectedQIds}
                // questions={questions}
                // setQuestions={setQuestions}
            />;
        default:
            return null;
    }
};

export default UploadQuiz;