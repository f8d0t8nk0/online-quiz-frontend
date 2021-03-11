import React, {useEffect, useState} from 'react';
import QuizCards from "../components/quiz/QuizCards";
import WholeQuiz from "../components/quiz/WholeQuiz";
import {useDispatch, useSelector} from "react-redux";
import {fetchQuizzes} from "../redux/api/apiActions";

function MyQuizzes(props) {

    const [step, setStep] = useState(1);
    const [selectedQuiz, setSelectedQuiz] = useState();
    const dispatch = useDispatch();
    const quizzes = useSelector(state => state.api.getQuizzes.quizzes);

    const nextStep = () => {
        setStep(step + 1);
    };

    useEffect(() => {
        dispatch(fetchQuizzes());
    }, []);

    switch (step) {
        case 1:
            return (
                <div>
                    {<QuizCards
                        quizzes={quizzes}
                        setSelectedQuiz={setSelectedQuiz}
                        nextStep={nextStep}
                    />}
                </div>
            );
        case 2:
            return (<WholeQuiz
                selectedQuiz={selectedQuiz}
            />);
        default:
            return null;
    }


}

export default MyQuizzes;