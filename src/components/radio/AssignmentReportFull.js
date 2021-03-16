import React from 'react';
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import QuestionsStats from "../stats/QuestionsStats";
import {useSelector} from "react-redux";

const useStyles = makeStyles({
    root: {
        minWidth: 550,
        maxWidth: 550,
        // width: "300",
        boxShadow: '0 0 10px 5px rgba(100, 100, 100, 0.3)',
        margin: "10px",
        '&:hover': {
            boxShadow: '0 0 10px 5px rgba(25, 25, 25, 0.4)',
        }
    },
    innerButton: {
        height: "100%",
        width: "100%",
    },
    quizName: {
        color: "#31a1ad"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function AssignmentReportFull({ }) {
    const classes = useStyles();



    const report = useSelector(state => {
        if (state.api.assignmentReport !== undefined) {
            return state.api.assignmentReport.report;
        }
    });

    return (
        <div>
            <Card className={classes.root} >
                <CardContent>
                    <Typography className={classes.quizName} variant="h5" component="h2">
                        {report.name}
                    </Typography>
                    <Typography component={'div'} className={classes.pos} color="textSecondary">
                        Your score {Math.ceil((report.correctAnswers * 100) / report.totalAnswers)} %
                        <br/>
                        Correct: {report.correctAnswers}
                        <br/>
                        Total  : {report.totalAnswers}
                    </Typography>
                </CardContent>
            </Card>
            <QuestionsStats answeredQuestions={report.answeredQuestions} />
        </div>
    );
}

export default AssignmentReportFull;