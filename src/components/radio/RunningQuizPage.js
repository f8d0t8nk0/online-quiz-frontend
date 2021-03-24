import React from 'react';
import { useHistory, useParams, useRouteMatch, Redirect } from "react-router-dom";
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

function RunningQuizPage({ assignments, nextStep }) {

    const classes = useStyles();
    const results = useSelector(state => state.gui.conductQuiz.selectedOptions);
    const dispatch = useDispatch();
    const history = useHistory();

    const { assignmentId } = useParams();
    const assignment = assignments.find(assignment => assignment.id === Number(assignmentId));

    const match = useRouteMatch();


    const handleSave = () => {
        console.log("Results: " + JSON.stringify(results, null, 1));

        let submitAssignmentDTO = {
            id: assignment.id,
            name: assignment.quizFullDto.name,
            selections: results
        };
        dispatch(checkAssignment(submitAssignmentDTO, history, match.url))
            .then(history.push(`${match.url}/report`));
        // history.push(`${match.url}/report`)
        dispatch(clearQuizRadioOptions());
        let theUrl = `${match.url}/report`;
        let newVar = () => <Redirect to={theUrl} />;
        newVar()
        console.log("Cleared!!!");
        // nextStep();
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