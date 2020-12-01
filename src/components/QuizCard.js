import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import DeleteQuizCardButton from "./DeleteQuizCardButton";

const useStyles = makeStyles({
    root: {
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
        transition: "opacity 0.5s",
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

export default function QuizCard({ quiz, ordinal }) {
    const classes = useStyles();
    const [rootClass, setRootClass] = useState(classes.root);

    const hideParent = () => {
        setRootClass(classes.fadeOutCard);
        setTimeout(() => setRootClass(classes.hideCard), 500);
    }

    return (
        <Card className={rootClass}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {ordinal}
                </Typography>
                <Typography className={classes.pos} color="textPrimary">
                    {quiz.question}
                </Typography>
                <Typography className={clsx((quiz.rightAn === "a") && classes.rightAnsClass)} >
                    {"A) " + quiz.a}
                </Typography>
                <Typography className={clsx((quiz.rightAn === "b") && classes.rightAnsClass)} >
                    {"B) " + quiz.b}
                </Typography>
                <Typography className={clsx((quiz.rightAn === "c") && classes.rightAnsClass)}  >
                    {"C) " + quiz.c}
                </Typography>
                <Typography className={clsx((quiz.rightAn === "d") && classes.rightAnsClass)} >
                    {"D) " + quiz.d}
                </Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.deleteButton} size="small" color="primary" onClick={hideParent}>
                    Delete
                </Button>
                {/*<DeleteQuizCardButton>*/}
                {/*    Custom*/}
                {/*</DeleteQuizCardButton>*/}
            </CardActions>
        </Card>
    );

}