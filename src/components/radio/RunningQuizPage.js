import React from 'react';
import { useHistory, useParams, useRouteMatch, Redirect } from "react-router-dom";
import CoreQuestions from "./CoreQuestions";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import {useDispatch, useSelector} from "react-redux";
import {clearQuizRadioOptions} from "../../redux/gui/guiActions";
import {checkAssignment, getUncompletedAssNum} from "../../redux/api/apiActions";

const useStyles = makeStyles({
    headerText: {
        textAlign: "center",
        margin: "10px",
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


    const handleSubmit = () => {
        console.log("Results: " + JSON.stringify(results, null, 1));

        let submitAssignmentDTO = {
            id: assignment.id,
            name: assignment.quizFullDto.name,
            selections: results
        };
        dispatch(checkAssignment(submitAssignmentDTO, history, match.url))
            .then(dispatch(getUncompletedAssNum()))
            .then(dispatch(clearQuizRadioOptions()))
            .then(history.push(`${match.url}/report`));
        // history.push(`${match.url}/report`)
        // dispatch(clearQuizRadioOptions());
        // dispatch(getUncompletedAssNum());
        let theUrl = `${match.url}/report`;
        let newVar = () => <Redirect to={theUrl} />;
        newVar()
        console.log("Cleared!!!");
        // nextStep();
    };

    return (
        <div>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid container item
                      xs={12} sm={12} md={9} lg={7} xl={4}
                      alignItems="center">
                    <h1 className={classes.headerText}>{assignment.quizFullDto.name}</h1>
                </Grid>
                <Grid container item>
                    <CoreQuestions questions={assignment.quizFullDto.questions}/>
                </Grid>
                <Grid container item
                      xs={12} sm={12} md={9} lg={7} xl={4}
                      alignItems="center">
                    <Button
                        onClick={() => handleSubmit()}
                        className={classes.saveButton}
                        variant="contained"
                        color="primary"
                    >Submit</Button>
                </Grid>
            </Grid>

        </div>
    );
}

export default RunningQuizPage;