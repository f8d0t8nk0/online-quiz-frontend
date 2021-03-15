import React, {useEffect, useState} from 'react';
import { Link, Route, useRouteMatch } from "react-router-dom";
import QuizCards from "../components/quiz/QuizCards";
import WholeQuiz from "../components/quiz/WholeQuiz";
import {useDispatch, useSelector} from "react-redux";
import {fetchQuizzes} from "../redux/api/apiActions";
import QuizCard from "../components/quiz/QuizCard";

function MyQuizzes(props) {

    const [step, setStep] = useState(1);
    const [selectedQuiz, setSelectedQuiz] = useState();
    const dispatch = useDispatch();
    const quizzes = useSelector(state => state.api.getQuizzes.quizzes);

    const {url} = useRouteMatch();

    const nextStep = () => {
        console.log("In Next Step: " + step); // todo dl
        setStep(step + 1);
    };

    useEffect(() => {
        dispatch(fetchQuizzes());
    }, []);

    return (
        <div>
            <Route exact path='/quizzes'>
                <QuizCards
                    quizzes={quizzes}
                    setSelectedQuiz={setSelectedQuiz}
                    url={url}
                />
            </Route>
            <Route path={`${url}/:quizId`}>
                <WholeQuiz
                    selectedQuiz={selectedQuiz}
                    quizzes={quizzes}
                />
            </Route>
        </div>
    )
}

export default MyQuizzes;