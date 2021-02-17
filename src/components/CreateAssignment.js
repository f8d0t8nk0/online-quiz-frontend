import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Quizzes from "./Quizzes";

const useStyles = makeStyles((theme) => ({
    formClass: {
        '& > *': {
            margin: theme.spacing(3),
            width: '25ch'
        },
    },
    saveButton: {
        margin: "10px",
        marginBottom: "150px"
    }
}));

function CreateAssignment({ quizzes }) {

    const state = {
        name: ''
    }
    const classes = useStyles();

    return (
        <div>
            <Typography >
                <h2>Create Your Assignment</h2>
            </Typography>
            <form className={classes.formClass} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Name your assignment" />
            </form>
            <Quizzes quizzes={quizzes} />
            <Button className={classes.saveButton} variant="contained" color="primary">Save</Button>
        </div>
    );
}

export default CreateAssignment;