import React, {useEffect, useState} from 'react';
import axios from "axios";
import QuizCards from "../components/quiz/QuizCards";
import WholeQuiz from "../components/quiz/WholeQuiz";


function MyQuizzes(props) {

    // const [plainText, setPlainText] = useState("");
    const [step, setStep] = useState(1);
    const [selectedQuiz, setSelectedQuiz] = useState();
    const [quizzesFromServer, setQuizzesFromServer] = useState([]);

    const nextStep = () => {
        setStep(step + 1);
    };

    const getUrl = () => {
        const host = `http://localhost:8080/`;
        // const host = 'https://online-quiz-webservice.herokuapp.com/';
        const allQuizzes = `api/v1/teacher/quiz/all`;
        return `${host}${allQuizzes}`;
    };


    const getQuizzes = () => {
        // send to API
        const url = getUrl();

        axios.get(url)
            .then(res => {
                setQuizzesFromServer(res.data);
                // console.log("Quizzes from server: " + quizzesFromServer);
                let data = res.data;
                // setPlainText(JSON.stringify(data));
            })
    };

    useEffect(() => {
        getQuizzes();
    }, []);

    switch (step) {
        case 1:
            return (
                <div>
                    {<QuizCards
                        quizzes={quizzesFromServer}
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