import React, {useEffect} from 'react';
import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import {fetchStudentAssignments, fetchTeacherAssignments} from "../redux/api/apiActions";
import MyAssignments from "../components/assignment/MyAssignments";
import {isStudent, isTeacher} from "../redux/priviliges";

function Assignments(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        if (isTeacher) {
            dispatch(fetchTeacherAssignments());
        }
        if (isStudent) {
            dispatch(fetchStudentAssignments());
        }
    }, []);

    return (
        <div>
            <Typography component={'div'} paragraph>
                <MyAssignments/>
            </Typography>
        </div>
    );
}

export default Assignments;