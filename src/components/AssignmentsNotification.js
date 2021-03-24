import React, {useEffect} from 'react';
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Badge from '@material-ui/core/Badge';
import {getUncompletedAssNum} from "../redux/api/apiActions";
import {useDispatch, useSelector} from "react-redux";


function AssignmentsNotification(props) {

    const dispatch = useDispatch();

    const uncompletedNum = useSelector(state => {
        let uncompletedAssNum = state.api.uncompletedAssNum;
        if (uncompletedAssNum !== undefined) {
            return state.api.uncompletedAssNum.num
        }
        return 0;
    });

    useEffect(() => {
        dispatch(getUncompletedAssNum())
    }, []);

    return (
        <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={uncompletedNum} color="secondary">
                <NotificationsIcon />
            </Badge>
        </IconButton>
    );
}

export default AssignmentsNotification;