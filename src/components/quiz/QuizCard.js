import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 275,
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

function QuizCard({ quiz, url }) {
    const classes = useStyles();

    const history = useHistory();

    const handleClick = () => {
        history.push(`${url}/${quiz.id}`);
    };

    return (
        <Card className={classes.root} >
            <Button className={classes.innerButton} onClick={handleClick}>
                <CardContent>
                    <Typography className={classes.quizName} variant="h5" component="h2">
                        {quiz.name}
                    </Typography>
                    <Typography component={'div'} className={classes.pos} color="textSecondary">
                        {quiz.questions.length} questions
                    </Typography>
                    <Typography variant="body2" component="p">
                        {quiz.description}
                    </Typography>
                    <Typography component={'div'} className={classes.pos} color="textSecondary">
                        # {quiz.id}
                    </Typography>
                </CardContent>
            </Button>
        </Card>
    );
}

export default QuizCard;