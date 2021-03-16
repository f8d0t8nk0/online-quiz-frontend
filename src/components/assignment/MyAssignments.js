import React, {useEffect, useState} from 'react';
import { Route, useRouteMatch } from "react-router-dom";
import {fetchTeacherAssignments} from "../../redux/api/apiActions";
import {useDispatch, useSelector} from "react-redux";
import AssignmentCards from "./AssignmentCards";
import RunningQuizPage from "../radio/RunningQuizPage";
import AssignmentReportMini from "../radio/AssignmentReportMini";
import AssignmentReportFull from "../radio/AssignmentReportFull";

function MyAssignments(props) {

    const {url} = useRouteMatch();

    const [step, setStep] = useState(1);
    const [selectedAssignment, setSelectedAssignment] = useState();
    const [assignments, setAssignments] = useState();

    const dispatch = useDispatch();
    // const assignments = useSelector(state => {
    //     return state.api.getTeachAssign.assignments;
    // });
    // const assignmentReportMini = useSelector(state => state.api.checkAssignment.report);
    // const assignmentReportFull = useSelector(state => {
    //     if (state.api.assignmentReport !== undefined) {
    //         return state.api.assignmentReport.report;
    //     }
    // });

    useEffect(() => {
        dispatch(fetchTeacherAssignments());
    }, []);

    const nextStep = () => {
        setStep(step + 1);
    };

    return (
        <div>
            <Route exact path={`${url}/`}>
                <AssignmentCards
                    url={url}
                    // assignments={assignments}
                    setSelectedAssignment={setSelectedAssignment}
                    setAssignments={setAssignments}
                    nextStep={nextStep}
                />
            </Route>
            <Route exact path={`${url}/:assignmentId`}>
                <RunningQuizPage
                    assignment={selectedAssignment}
                    assignments={assignments}
                    // nextStep={nextStep}
                />;
            </Route>
            <Route exact path={`${url}/:assignmentId/report`}>
                <AssignmentReportMini />
            </Route>
            <Route path={`${url}/:assignmentId/report/full`}>
                <AssignmentReportFull />
            </Route>
        </div>
    );
    //
    // switch (step) {
    //     case 1:
    //         return (
    //             <div>
    //                 <AssignmentCards
    //                     assignments={assignments}
    //                     setSelectedAssignment={setSelectedAssignment}
    //                     nextStep={nextStep}
    //                 />
    //             </div>
    //         );
    //     case 2:
    //         return <RunningQuizPage
    //                     assignment={selectedAssignment}
    //                     nextStep={nextStep}
    //                 />;
    //     case 3:
    //         return <AssignmentReportMini
    //                     report={assignmentReportMini}
    //                     nextStep={nextStep}
    //                 />;
    //
    //     case 4:
    //         return <AssignmentReportFull report={assignmentReportFull}/>;
    //     default:
    //         return null;
    // }


}

export default MyAssignments;