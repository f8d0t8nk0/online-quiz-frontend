import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PersonIcon from "@material-ui/icons/Person";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentIcon from "@material-ui/icons/Assignment";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: '#b7b5b5',
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
    })
)

function Sidebar({ open, handleDrawerOpen, handleDrawerClose }) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>

                <List>
                    <ListItem button key="Account" className="listItem">
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        <ListItemText primary="Account" />
                    </ListItem>
                    <ListItem button key="Students" className="listItem">
                        <ListItemIcon><PeopleIcon /></ListItemIcon>
                        <ListItemText primary="Students" />
                    </ListItem>
                    <ListItem button key="Assignments" className="listItem">
                        <ListItemIcon><AssignmentIcon /></ListItemIcon>
                        <ListItemText primary="Assignments" />
                    </ListItem>
                    <ListItem button key="Dashboard" className="listItem">
                        <ListItemIcon><TrendingUpIcon /></ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button key="Settings" className="listItem">
                        <ListItemIcon><SettingsIcon /></ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                    <ListItem button key="Logout" className="listItem">
                        <ListItemIcon><ArrowBackIcon /></ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>

            </Drawer>
        </div>
    );
}

export default Sidebar;


