import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import ArchiveQuizCard from "./ArchiveQuizCard";

const useStyles = makeStyles({
    root: {
        display : "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
    },
    headerText: {
        textAlign: "center"
    }
});

function ArchiveQuizCards({quizzes, url, forceUpdate}) {

    const classes = useStyles();

    return (
        <div>
            <h1 className={classes.headerText}>Archived Quizzes</h1>
            <div className={classes.root}>
                {quizzes.map((quiz, index) => {
                    return (
                        <ArchiveQuizCard
                            key={quiz.id}
                            quiz={quiz}
                            url={url}
                            forceUpdate={forceUpdate}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default ArchiveQuizCards;