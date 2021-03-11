import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {fetchTeacherAssignments} from "../../redux/api/apiActions";
import {useDispatch, useSelector} from "react-redux";
import AssignmentCards from "./AssignmentCards";
import Typography from "@material-ui/core/Typography";
import CoreQuestions from "../radio/CoreQuestions";
import RunningQuizPage from "../radio/RunningQuizPage";


const useStyles = makeStyles({
    headerText: {
        textAlign: "center"
    }
});

function MyAssignments(props) {

    const classes = useStyles();
    const [step, setStep] = useState(1);
    const [selectedAssignment, setSelectedAssignment] = useState();

    const dispatch = useDispatch();
    const assignments = useSelector(state => {
        return state.api.getTeachAssign.assignments;
    });

    useEffect(() => {
        dispatch(fetchTeacherAssignments());
    }, []);

    const nextStep = () => {
        setStep(step + 1);
    };

    switch (step) {
        case 1:
            return (
                <div>
                    <AssignmentCards
                        assignments={assignments}
                        setSelectedAssignment={setSelectedAssignment}
                        nextStep={nextStep}
                    />
                </div>
            );
        case 2:
            return <RunningQuizPage assignment={selectedAssignment} />
        default:
            return null;
    }


}

export default MyAssignments;