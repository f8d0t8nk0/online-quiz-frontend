import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CreateGroupForm from "./CreateGroupForm";
import StudentNotFoundErrorMessage from "./StudentNotFoundErrorMessage";

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

function CreateGroup(props) {

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const forceUpdate = () => {
        setValue(value + 1);
    }

    useEffect(() => {
        console.log(value)
    }, [value]);

    return (
        <div className={classes.root}>
            <br/>
            <br/>
            <br/>
            <br/>
            <CreateGroupForm forceUpdate={forceUpdate}/>
            <StudentNotFoundErrorMessage/>
        </div>
    );
}

export default CreateGroup;