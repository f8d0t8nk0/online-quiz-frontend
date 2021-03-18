import React, {useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {clearSuccesForRedirect, createNewGroup} from "../redux/api/apiActions";
import {useDispatch, useSelector} from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import SuccessCheck from "./SuccessCheck";

const useStyles = makeStyles((theme) => ({
    root: {
        display : "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    emailsField: {
        '& > *': {
            margin: theme.spacing(3),
            width: '100ch'
        },
    },
    groupNameField: {
        '& > *': {
            margin: theme.spacing(3),
            width: '25ch'
        },
    },
    createGroupButton: {
        margin: theme.spacing(3),
        width: '300px',
        boxShadow: '0 0 10px 5px rgba(100, 100, 100, 0.3)',
        '&:hover': {
            boxShadow: '0 0 10px 5px rgba(25, 25, 25, 0.4)',
        }
    },
}));

function CreateGroupForm({ forceUpdate, hook }) {

    const classes = useStyles();
    const [groupName, setGroupName] = useState('');
    const [emails, setEmails] = useState("");
    // const [success, setSuccess] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const success = useSelector(state => state.api.saveGroup.success);


    useEffect(() => {
        clearSuccesForRedirect();
        // success = false;
    }, []);

    const handleGoButton = () => {
        let emailsArr;
        if (emails !== '') {
            emailsArr = emails.split(',').map(elem => elem.trim());
        }

        let dto = {
            name: groupName,
            studentEmails: emailsArr
        };

        console.log("Students dto: " + JSON.stringify(dto, null, 1));

        dispatch(createNewGroup(dto))
            .then(forceUpdate())
            .then(success ? () => history.push('/groups') : '') // todo redirect only if success

    };

    // if (success) {
    //     return <Redirect to={'/groups'}/>
    // }

    return (
        <div className={classes.root}>

            <TextField
                onChange={event => setGroupName(event.target.value)}
                className={classes.groupNameField}
                id="standard-basic"
                // label="Name your assignment"
                label={groupName === "" ? "Group name" : ""}
                InputLabelProps={{shrink: false}}
            />

            <TextField
                onChange={event => setEmails(event.target.value)}
                className={classes.emailsField}
                id="standard-basic"
                label={emails === "" ? "Input emails separated by commas" : ""}
                InputLabelProps={{shrink: false}}
            />
            <Button
                className={classes.createGroupButton}
                variant="outlined"
                onClick={() => {
                    handleGoButton();
                }}>
                Create Group
            </Button>
            {/*<SuccessCheck success={success} setSuccess={setSuccess}/>*/}
        </div>
    );
}

export default CreateGroupForm;