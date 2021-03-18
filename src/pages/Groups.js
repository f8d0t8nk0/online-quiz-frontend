import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { Link, Route, useRouteMatch, useHistory } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import CreateGroup from "../components/CreateGroup";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllGroups} from "../redux/api/apiActions";
import GroupTables from "../components/group/GroupTables";

const useStyles = makeStyles(() => ({
    headerText: {
        textAlign: "center",
        align: 'center'
    },
}));

function Groups(props) {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const groups = useSelector(state => {
        if (state.api.allGroups !== undefined) {
            return state.api.allGroups.groups;
        }
        return []
    });

    useEffect(() => {
        dispatch(fetchAllGroups())
    }, []);

    return (
        <div className={classes.headerText}>
            <br/>
            <br/>
            <br/>
            <h1>Groups</h1>
            <GroupTables groups={groups} />
            <Fab color="primary" aria-label="add" onClick={() => history.push('groups/create')}>
                <AddIcon/>
            </Fab>

        </div>
    );
}

export default Groups;