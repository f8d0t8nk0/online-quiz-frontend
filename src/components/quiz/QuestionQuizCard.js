import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const fadeOutTime = 500;

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
    fadeOutCard : {
        boxShadow: '0 0 10px 5px rgba(100, 100, 100, 0.3)',
        margin: "10px",
        transition: "opacity " + fadeOutTime/1000 + "s ease-out",
        opacity: "0"
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

function QuestionQuizCard({ quiz, ordinal }) {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography component={'div'}  className={classes.title} color="textSecondary" gutterBottom>
                    {ordinal}
                </Typography>
                <Typography component={'div'}  className={classes.pos} color="textPrimary">
                    {quiz.question}
                </Typography>
                <Typography component={'div'}  className={clsx((quiz.rightAn === "a") && classes.rightAnsClass)} >
                    {"A) " + quiz.a}
                </Typography>
                <Typography component={'div'}  className={clsx((quiz.rightAn === "b") && classes.rightAnsClass)} >
                    {"B) " + quiz.b}
                </Typography>
                <Typography component={'div'}  className={clsx((quiz.rightAn === "c") && classes.rightAnsClass)}  >
                    {"C) " + quiz.c}
                </Typography>
                <Typography component={'div'}  className={clsx((quiz.rightAn === "d") && classes.rightAnsClass)} >
                    {"D) " + quiz.d}
                </Typography>
            </CardContent>
        </Card>
    );

}

export default QuestionQuizCard;