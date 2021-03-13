import React, {useEffect, useState} from 'react';
import {fetchTeacherAssignments} from "../../redux/api/apiActions";
import {useDispatch, useSelector} from "react-redux";
import AssignmentCards from "./AssignmentCards";
import RunningQuizPage from "../radio/RunningQuizPage";
import AssignmentReportMini from "../radio/AssignmentReportMini";
import AssignmentReportFull from "../radio/AssignmentReportFull";

function MyAssignments(props) {

    const [step, setStep] = useState(1);
    const [selectedAssignment, setSelectedAssignment] = useState();

    const dispatch = useDispatch();
    const assignments = useSelector(state => {
        return state.api.getTeachAssign.assignments;
    });
    const assignmentReportMini = useSelector(state => state.api.checkAssignment.report);
    const assignmentReportFull = useSelector(state => state.api.assignmentReport.report);

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
            return <AssignmentReportMini
                        report={assignmentReportMini}
                        nextStep={nextStep}
                    />;

        case 4:
            return <AssignmentReportFull report={assignmentReportFull}/>;
        default:
            return null;
    }


}

export default MyAssignments;