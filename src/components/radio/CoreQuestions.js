import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CoreQuestionCard from "./CoreQuestionCard";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    // root: {
    //     display : "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    // }
});

function CoreQuestions({questions}) {

    const classes = useStyles();

    return (

        // <div className={classes.root}>
        <Grid
            container
            direction="row"
            justify="center"
        >
            {questions.map((question, index) => {
                return (
                    <CoreQuestionCard
                        key={question.id}
                        question={question}
                        ordinal={index + 1}
                    />
                )
            })}
        </Grid>
        // {/*</div>*/}

    );
}

export default CoreQuestions;