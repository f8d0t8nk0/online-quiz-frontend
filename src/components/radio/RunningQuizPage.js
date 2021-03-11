import React from 'react';
import CoreQuestions from "./CoreQuestions";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {clearQuizRadioOptions} from "../../redux/gui/guiActions";
import {checkAssignment} from "../../redux/api/apiActions";

const useStyles = makeStyles({
    headerText: {
        textAlign: "center"
    },
    saveButton: {
        margin: "10px",
        marginBottom: "150px"
    }
});

function RunningQuizPage({ assignment, nextStep }) {

    const classes = useStyles();
    const results = useSelector(state => state.gui.conductQuiz.selectedOptions);
    const dispatch = useDispatch();

    const handleSave = () => {
        console.log("Results: " + JSON.stringify(results, null, 1));

        let submitAssignmentDTO = {
            id: assignment.id,
            name: assignment.quizFullDto.name,
            selections: results
        };
        dispatch(checkAssignment(submitAssignmentDTO));
        dispatch(clearQuizRadioOptions());
        console.log("Cleared!!!");
        nextStep();
    };

    return (
        <div>
            <h1 className={classes.headerText}>{assignment.quizFullDto.name}</h1>
            <CoreQuestions questions={assignment.quizFullDto.questions}/>

            <Button
                onClick={() => handleSave()}
                className={classes.saveButton}
                variant="contained"
                color="primary"
            >Submit</Button>
        </div>
    );
}

export default RunningQuizPage;