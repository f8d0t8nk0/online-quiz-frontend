import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import AssignmentCards from "../components/assignment/AssignmentCards";
import {fetchTeacherAssignments} from "../redux/api/apiActions";
import MyAssignments from "../components/assignment/MyAssignments";

function Assignments(props) {

    // const [assignments, setAssignments] = useState([])
    const [plainText, setPlainText] = useState("");
    const dispatch = useDispatch();
    const assignments = useSelector(state => {
        return state.api.getTeachAssign.assignments;
    });

    useEffect(() => {
        dispatch(fetchTeacherAssignments());
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