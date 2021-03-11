import React, {useEffect} from 'react';
import Typography from "@material-ui/core/Typography";
import {useDispatch} from "react-redux";
import {fetchTeacherAssignments} from "../redux/api/apiActions";
import MyAssignments from "../components/assignment/MyAssignments";

function Assignments(props) {

    const dispatch = useDispatch();

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