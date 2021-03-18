import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Snackbar from '@material-ui/core/Snackbar';
import Alert, { AlertTitle } from '@material-ui/lab/Alert';
import {callStudentErrorSnackbar} from "../redux/gui/guiActions";
import Collapse from '@material-ui/core/Collapse';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    alert: {
        width: '400px'
    },
    marginH5: {
        margin: theme.spacing(3),
        color: 'red'
    },
}));

function StudentNotFoundErrorMessage() {

    const dispatch = useDispatch();
    const classes = useStyles();

    const [open, setOpen] = useState(true);


    const errMsg = useSelector(state => {
        // console.log("State: " + JSON.stringify(state, null, 1));
        return state.api.saveGroup.errorMsg;
    });

    const wasCalled = useSelector(state => state.gui.errorStudentSnackbar.wasOnceCalled);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    if (errMsg !== '' && !wasCalled) {
        setOpen(true);
        dispatch(callStudentErrorSnackbar());
    }

    return (
        // <Collapse className={classes.alert} in={open}>
        //     <Alert severity="error" onClose={handleClose}>{errMsg}</Alert>
        // </Collapse>
        <h4 className={classes.marginH5}>{errMsg}</h4>
    );
}

export default StudentNotFoundErrorMessage;