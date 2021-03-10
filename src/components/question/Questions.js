import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import QuestionCard from "./QuestionCard";

const useStyles = makeStyles({
    root: {
        display : "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    }
});

function Questions({ quizzes, selectedQIds }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {quizzes.map((quiz, index) => {
                return (
                    <QuestionCard
                        key={quiz.id}
                        quiz={quiz}
                        ordinal={index + 1}
                        selectedQIds={selectedQIds}
                        // setSelectedQIds={setSelectedQIds}
                    />
                )
            })}
        </div>
    );
}

export default Questions;