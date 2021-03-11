import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Questions from "./question/Questions";
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {createAssignment, fetchQuizzes} from "../redux/api/apiActions";

const useStyles = makeStyles((theme) => ({
    formClass: {
        '& > *': {
            margin: theme.spacing(3),
            width: '25ch'
        },
    },
    saveButton: {
        margin: "10px",
        marginBottom: "150px"
    }
}));

function CreateAssignment({ nextStep, questions, selectedQIds }) {

    const dispatch = useDispatch();
    const [quizName, setQuizName] = useState("");
    const classes = useStyles();
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

        dispatch(createAssignment(quizDto));
        dispatch(fetchQuizzes());
        history.push("/quizzes")
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
                label="Name your assignment"
            />
            <Questions
                quizzes={questions}
                selectedQIds={selectedQIds}
                // setSelectedQIds={setSelectedQIds}
            />
            <Button
                onClick={() => handleSave()}
                className={classes.saveButton}
                variant="contained"
                color="primary"
            >Save</Button>
        </div>
    );
}

export default CreateAssignment;