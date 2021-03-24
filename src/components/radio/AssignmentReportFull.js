import React, { useEffect } from 'react';
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import QuestionsStats from "../stats/QuestionsStats";
import {useDispatch, useSelector} from "react-redux";
import {myHoverShadow, myShadow} from "../../redux/globalStyleConst";
import {fetchAssignmentReport} from "../../redux/api/apiActions";

const useStyles = makeStyles({
    root: {
        boxShadow: myShadow,
        margin: "10px",
        '&:hover': {
            boxShadow: myHoverShadow,
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

function AssignmentReportFull({ selectedReport }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const report = useSelector(state => {
        if (state.api.assignmentReport !== undefined) {
            return state.api.assignmentReport.report;
        }
    });

    useEffect(() => {
        dispatch(fetchAssignmentReport(selectedReport))
    }, []);

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