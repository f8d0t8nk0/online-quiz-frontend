import React, {useState} from 'react';
import ParseQuestions from "../components/question/ParseQuestions";
import CreateAssignment from "../components/CreateAssignment";
import MyQuizzes from "./MyQuizzes";

const UploadQuiz = props => {

    const [quizzes, setQuizzes] = useState("");
    const [step, setStep] = useState(1);
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
                setSelectedQIds={setSelectedQIds}
            />;
        case 2:
            return <CreateAssignment
                nextStep={nextStep}
                quizzes={quizzes}
                selectedQIds={selectedQIds}
                setSelectedQIds={setSelectedQIds}
            />;
        default:
            return null;
    }
};

export default UploadQuiz;