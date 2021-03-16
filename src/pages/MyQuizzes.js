import React, {useEffect, useState} from 'react';
import { Link, Route, useRouteMatch } from "react-router-dom";
import QuizCards from "../components/quiz/QuizCards";
import WholeQuiz from "../components/quiz/WholeQuiz";
import {useDispatch, useSelector} from "react-redux";
import {fetchQuizzes} from "../redux/api/apiActions";
import QuizCard from "../components/quiz/QuizCard";

function MyQuizzes(props) {

    const dispatch = useDispatch();
    const quizzes = useSelector(state => state.api.getQuizzes.quizzes);

    const {url} = useRouteMatch();

    useEffect(() => {
        dispatch(fetchQuizzes());
    }, []);

    return (
        <div>
            <Route exact path='/quizzes'>
                <QuizCards
                    quizzes={quizzes}
                    url={url}
                />
            </Route>
            <Route path={`${url}/:quizId`}>
                <WholeQuiz
                    quizzes={quizzes}
                />
            </Route>
        </div>
    )
}

export default MyQuizzes;