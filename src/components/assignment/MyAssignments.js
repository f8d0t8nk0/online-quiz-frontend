import React, {useEffect, useState} from 'react';
import {fetchTeacherAssignments} from "../../redux/api/apiActions";
import {useDispatch, useSelector} from "react-redux";
import AssignmentCards from "./AssignmentCards";
import RunningQuizPage from "../radio/RunningQuizPage";
import AssignmentReport from "../radio/AssignmentReport";

function MyAssignments(props) {

    const [step, setStep] = useState(1);
    const [selectedAssignment, setSelectedAssignment] = useState();

    const dispatch = useDispatch();
    const assignments = useSelector(state => {
        return state.api.getTeachAssign.assignments;
    });
    const assignmentReport = useSelector(state => state.api.checkAssignment.report);

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
            return <RunningQuizPage
                        assignment={selectedAssignment}
                        nextStep={nextStep}
                    />;
        case 3:
            return <AssignmentReport report={assignmentReport} />;
        default:
            return null;
    }


}

export default MyAssignments;