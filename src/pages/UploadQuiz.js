import React, {useState} from 'react';
import ParseQuestions from "../components/ParseQuestions";
import CreateAssignment from "../components/CreateAssignment";

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
                quizzes={quizzes}
                selectedQIds={selectedQIds}
                setSelectedQIds={setSelectedQIds}
            />;
        // case 3:
        //     return // todo add quizzes tab
        default:
            return null;
    }
}

export default UploadQuiz;