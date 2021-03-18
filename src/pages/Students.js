import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {createNewGroup} from "../redux/api/apiActions";
import {useDispatch, useSelector} from "react-redux";
import CreateGroupForm from "../components/CreateGroupForm";
import StudentNotFoundErrorMessage from "../components/StudentNotFoundErrorMessage";
import CreateGroup from "../components/CreateGroup";
import { Link, Route, useRouteMatch, useHistory } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Groups from "./Groups";


const useStyles = makeStyles((theme) => ({
    headerText: {
        // textAlign: "center",
        // align: 'center'
    },
    linkButton: {
        textDecoration: 'none',
    }
}));

function Students(props) {

    const classes = useStyles();
    const history = useHistory();
    const {url} = useRouteMatch();

    return (
        <div className={classes.headerText}>
            <h1 >Students</h1>

            <Link className={classes.linkButton} to='/groups'>
                <Button variant="contained">Groups</Button>
            </Link>



        </div>
    );
}

export default Students;