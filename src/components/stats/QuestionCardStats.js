import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    root: {
        minWidth: 550,
        maxWidth: 550,
        display : "flex",
        flexDirection: "column",
        boxShadow: '0 0 10px 5px rgba(100, 100, 100, 0.3)',
        margin: "10px",
        '&:hover': {
            boxShadow: '0 0 10px 5px rgba(25, 25, 25, 0.4)',
        }
    },
    hideCard: {
        display: "none"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    rightAnsClass: {
        color: "green"
    },
    wrongAnsClass: {
        color: "red"
    },
    deleteButton: {
        alignSelf: "right",
        marginLeft: "auto",
        backgroundColor: "#cd3a27",
        color: "white",
        '&:hover': {
            boxShadow: '0 0 10px 5px rgba(25, 25, 25, 0.3)',
            backgroundColor: "#941f0e",
        }
    }
});

function QuestionCardStats({ answeredQuestion, ordinal }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography component={'div'}  className={classes.title} color="textSecondary" gutterBottom>
                    {ordinal}
                </Typography>
                <Typography component={'div'}  className={classes.pos} color="textPrimary">
                    {answeredQuestion.question.question}
                </Typography>
                <Typography component={'div'}
                            className={clsx(
                                ((answeredQuestion.question.rightAn === "a") && classes.rightAnsClass),
                                (((answeredQuestion.answer === 'a') && (answeredQuestion.question.rightAn !== answeredQuestion.answer)) && classes.wrongAnsClass)
                                )}
                >
                    {"A) " + answeredQuestion.question.a}
                </Typography>
                <Typography component={'div'}
                            className={clsx(
                                ((answeredQuestion.question.rightAn === "b") && classes.rightAnsClass),
                                (((answeredQuestion.answer === 'b') && (answeredQuestion.question.rightAn !== answeredQuestion.answer)) && classes.wrongAnsClass)
                            )}
                >
                    {"B) " + answeredQuestion.question.b}
                </Typography>
                <Typography component={'div'}
                            className={clsx(
                                ((answeredQuestion.question.rightAn === "c") && classes.rightAnsClass),
                                (((answeredQuestion.answer === 'c') && (answeredQuestion.question.rightAn !== answeredQuestion.answer)) && classes.wrongAnsClass)
                            )}
                >
                    {"C) " + answeredQuestion.question.c}
                </Typography>
                <Typography component={'div'}
                            className={clsx(
                                ((answeredQuestion.question.rightAn === "d") && classes.rightAnsClass),
                                (((answeredQuestion.answer === 'd') && (answeredQuestion.question.rightAn !== answeredQuestion.answer)) && classes.wrongAnsClass)
                            )}
                >
                    {"D) " + answeredQuestion.question.d}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default QuestionCardStats;
