import React, {useState} from 'react';
import ParseQuestions from "../components/question/ParseQuestions";
import CreateAssignment from "../components/CreateAssignment";
import {useDispatch, useSelector} from "react-redux";

const UploadQuiz = props => {

    const [step, setStep] = useState(1);
    const [quizzes, setQuizzes] = useState([]);
    const questions = useSelector(state => {
        return state.api.createQReq.questions;
    });
    const selectedQIds = questions.map(q => q.id);

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
            />;
        case 2:
            return <CreateAssignment
                nextStep={nextStep}
                questions={questions}
                selectedQIds={selectedQIds}
            />;
        default:
            return null;
    }
};

export default UploadQuiz;