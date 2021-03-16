import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import QuizCard from "./QuizCard";

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

function QuizCards({ quizzes, url }) {
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
                            url={url}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default QuizCards;