import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {fetchQuestions} from '../../redux/api/apiActions';
import {useDispatch} from 'react-redux';
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    pasteQuestions : {
        flex: 1,
        width: '100%',
        margin: "10px"
    },
    commonMargin: {
        margin: "10px"
    },
    submitButton : {
        width: "fit-content",
        margin: "10px",
        borderRadius: "100em",
        padding: "10px 25px",
        paddingLeft: "25px",
        font: "13px/20px 'Lucida Grande', Verdana, sans-serif",
        transition: "all .1s",
        fontSize: "15px",
        color: "#fcfbfb",
        textShadow: "0 0 2px rgba(0, 0, 0, .7)",
        backgroundColor: "#303030",
        border: "solid #797878 1px",
        backgroundImage: "linear-gradient(to bottom, #D9D8D8, #868585)"
    },
}));

function ParseQuestions(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState("");
    const [answers, setAnswers] = useState("");

    const buildDto = () => {
        return {
            questionsText: questions,
            answersText: answers
        }
    };

    const next = () => {
        props.nextStep();
    };

    return (
        <Grid
            container
            direction="row"
            justify="center"
        >
            <Grid container
                  item
                  xs={12} sm={12} md={8} lg={6} xl={4}
                  direction="column"
                  alignItems="stretch"
            >
                <Grid item>
                    <Typography className={classes.commonMargin} component={'div'}>
                        <h2>Upload Your Quiz</h2>
                    </Typography>
                </Grid>
                <Grid item>
                    <TextareaAutosize
                        className={classes.pasteQuestions}
                        onChange={event => setQuestions(event.target.value)}
                        placeholder="Paste questions' text here: "
                        aria-label="minimum height"
                        rowsMin={10} />
                </Grid>
                <Grid item>
                    <TextareaAutosize
                        className={classes.pasteQuestions}
                        onChange={event => setAnswers(event.target.value)}
                        placeholder="Paste answers' text here: "
                        aria-label="minimum height"
                        rowsMin={5} />
                </Grid>
                <Grid item>
                    <Button
                        className={classes.submitButton}
                        onClick= {() => {
                            dispatch(fetchQuestions(buildDto()))
                            // .then(dispatch(firstSelectedIds()));
                            next();
                        }}>Submit
                    </Button>
                </Grid>
            </Grid>


        </Grid>
    );
}

export default ParseQuestions;