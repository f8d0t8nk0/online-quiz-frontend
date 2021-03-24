import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Questions from "./question/Questions";
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {createQuiz, fetchQuizzes} from "../redux/api/apiActions";

const useStyles = makeStyles((theme) => ({
    formClass: {
        '& > *': {
            margin: theme.spacing(3),
            width: '25ch'
        },
    },
    saveButton: {
        margin: "10px 10px 10px 0",
        marginBottom: "150px"
    },
    hideProgress: {
        display: "none"
    },
    showProgress: {
        display: "flex",
        flexDirection: "row",
        margin: "10px",
        marginBottom: "150px"
    },
    bottomDiv: {
        display: "flex",
        flexDirection: "row",
        margin: "10px",
        marginBottom: "150px"
    }
}));

function CreateQuiz({ nextStep, questions, selectedQIds }) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [quizName, setQuizName] = useState("");
    const [progressClass, setProgressClass] = useState(classes.hideProgress);
    const history = useHistory();

    let quizDto = {
        name: "",
        questionsIds: ""
    };

    const handleSave = () => {
        // todo delete
        console.log("Quiz name: " + quizName);
        console.log("Selected ids in CreateAssignment: " + selectedQIds);

        quizDto.name = quizName;
        quizDto.questionsIds = selectedQIds;

        dispatch(createQuiz(quizDto));
        dispatch(fetchQuizzes());
        setProgressClass(classes.showProgress);
        setTimeout(() => history.push("/quizzes"), 1500);
    };


    return (

        <div>
            <Typography component={'div'}  >
                <h2>Create Your Assignment</h2>
            </Typography>
            {/*<form className={classes.formClass} noValidate autoComplete="off">*/}
            {/*    <TextField id="standard-basic" label="Name your assignment" />*/}
            {/*    */}
            {/*</form>*/}
            <TextField
                onChange={event => setQuizName(event.target.value)}
                className={classes.formClass}
                id="standard-basic"
                // label="Name your assignment"
                label={quizName === "" ? "Name your assignment" : ""}
                InputLabelProps={{shrink: false}}
            />
            <Questions
                quizzes={questions}
                selectedQIds={selectedQIds}
                // setSelectedQIds={setSelectedQIds}
            />
            <div className={classes.bottomDiv}>
                <Button
                    onClick={() => handleSave()}
                    className={classes.saveButton}
                    variant="contained"
                    color="primary"
                >Save</Button>
                <CircularProgress
                    disableShrink
                    className={progressClass}
                />
            </div>

        </div>
    );
}

export default CreateQuiz;