import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import QuizCard from "./QuizCard";

const useStyles = makeStyles({
    root: {
        display : "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    }
});

function Quizzes({ quizzes }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {quizzes.map((quiz, index) => {
                return (
                    <QuizCard quiz={quiz} ordinal={index + 1} />
                )
            })}
        </div>
    );
}

export default Quizzes;