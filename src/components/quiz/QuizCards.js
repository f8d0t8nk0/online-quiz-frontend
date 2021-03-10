import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import QuizCard from "./QuizCard";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        display : "flex",
        // flexFlow: "row wrap",
        // flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
    },
    headerText: {
        textAlign: "center"
    }
});

function QuizCards({ quizzes, setSelectedQuiz, nextStep }) {
    const classes = useStyles();

    return (
        <div>
            <h1 className={classes.headerText}>My Quizzes</h1>
            <div className={classes.root}>
                {quizzes.map((quiz, index) => {
                    return (
                        <QuizCard
                            key={quiz.id}
                            quiz={quiz}
                            setSelectedQuiz={setSelectedQuiz}
                            nextStep={nextStep}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default QuizCards;