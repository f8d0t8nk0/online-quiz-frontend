import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CoreQuestionCard from "./CoreQuestionCard";

const useStyles = makeStyles({
    root: {
        display : "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    }
});

function CoreQuestions({ questions }) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {questions.map((question, index) => {
                return (
                    <CoreQuestionCard
                        key={question.id}
                        question={question}
                        ordinal={index + 1}
                    />
                )
            })}
        </div>
    );
}

export default CoreQuestions;