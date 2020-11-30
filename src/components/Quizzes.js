import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {QuizzesData} from "./QuizzesData";
import QuizCard from "./QuizCard";
import Typography from "@material-ui/core/Typography";

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
            <Typography >
                <h2>Your Saved Questions</h2>
            </Typography>
            {quizzes.map((quiz, index) => {
                return (
                    <QuizCard quiz={quiz} ordinal={index + 1} />
                )
            })}
        </div>
    );
}

export default Quizzes;