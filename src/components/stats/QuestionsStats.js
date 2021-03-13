import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import QuestionCardStats from "./QuestionCardStats";

const useStyles = makeStyles({
    root: {
        display : "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    }
});

function QuestionsStats({ answeredQuestions }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {answeredQuestions.map((answQuestion, index) => {
                return (
                    <QuestionCardStats
                        key={answQuestion.id}
                        answeredQuestion={answQuestion}
                        ordinal={index + 1}
                    />
                )
            })}
        </div>
    );
}

export default QuestionsStats;
