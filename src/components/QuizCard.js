import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        // minWidth: 275,
        display : "flex",
        boxShadow: '0 0 10px 5px rgba(100, 100, 100, 0.3)',
        margin: "10px"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function QuizCard({ quiz, ordinal }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {ordinal}
                </Typography>
                <Typography className={classes.pos} color="textPrimary">
                    {quiz.question}
                </Typography>
                <Typography  >
                    {"A) " + quiz.a}
                </Typography>
                <Typography  >
                    {"B) " + quiz.b}
                </Typography>
                <Typography  >
                    {"C) " + quiz.c}
                </Typography>
                <Typography  >
                    {"D) " + quiz.d}
                </Typography>
            </CardContent>
        </Card>
    );

}