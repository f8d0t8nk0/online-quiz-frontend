import React, {useState} from 'react';
import ParseQuestions from "../components/question/ParseQuestions";
import CreateAssignment from "../components/CreateAssignment";
import MyQuizzes from "./MyQuizzes";
import {useDispatch, useSelector} from "react-redux";
import {firstSelectedIds} from "../redux/gui/guiActions";

const UploadQuiz = props => {

    const dispatch = useDispatch();
    const [step, setStep] = useState(1);
    const [quizzes, setQuizzes] = useState([]);
    // const [selectedQIds, setSelectedQIds] = useState([]);
    // const selectedQIds = useSelector(state => {
    //     return state.gui.createAssignment.selectedId;
    // });
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
                // setQuestions={setQuestions}
                // setSelectedQIds={setSelectedQIds}
            />;
        case 2:
            return <CreateAssignment
                nextStep={nextStep}
                questions={questions}
                selectedQIds={selectedQIds}
                // setSelectedQIds={setSelectedQIds}
                // questions={questions}
                // setQuestions={setQuestions}
            />;
        default:
            return null;
    }
};

export default UploadQuiz;