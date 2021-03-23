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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from "@material-ui/core/styles/styled";
import {myHoverShadow, myShadow, myShadows} from "../redux/globalStyleConst";


const useStyles = makeStyles((theme) => ({
    // headerText: {
    //     // textAlign: "center",
    //     // align: 'center'
    // },
    root : {
        // width: "100%",
        // padding: theme.spacing(2),
        // flexGrow: 1,
    },
    linkButton: {
        textDecoration: 'none',
    },
    grid : {
        // flexGrow: 1,
        width: "100%",
        margin: '0px'
    },
    paper : {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: '#eae9e9',
    },
    shadows: myShadows
}));

function Students(props) {

    const classes = useStyles();
    const history = useHistory();
    const {url} = useRouteMatch();

    return (
        <div className={classes.root}>
             <Grid container className={classes.root}  spacing={2} >
                 <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                         <Paper
                             className={`${classes.paper} ${classes.shadows}`}
                             elevation={3}>
                             Students
                         </Paper>
                 </Grid>
                 <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                     <Link className={classes.linkButton} to='/groups'>
                         <Paper
                             className={`${classes.paper} ${classes.shadows}`}
                             elevation={3}>
                             Groups
                         </Paper>
                     </Link>
                 </Grid>
             </Grid>
        </div>
    );
}

export default Students;