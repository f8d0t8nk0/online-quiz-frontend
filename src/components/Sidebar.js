import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import UploadIcon from '@material-ui/icons/Backup';
import Drawer from "@material-ui/core/Drawer";
import { withRouter } from "react-router-dom";

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

function Sidebar({ open, handleDrawerOpen, handleDrawerClose, history }) {
    const classes = useStyles();

    const itemList = [{
        text: 'Account',
        icon: <PersonIcon />,
        onClick: () => {
            history.push('/account');
            handleDrawerClose();
        }
    }, {
        text: 'Students',
        icon: <PeopleIcon />,
        onClick: () => {
            history.push('/students');
            handleDrawerClose();
        }
    }, {
        text: 'Assignments',
        icon: <AssignmentIcon />,
        onClick: () => {
            history.push('/assignments');
            handleDrawerClose();
        }
    }, {
        text: 'Upload Quiz',
        icon: <UploadIcon />,
        onClick: () => {
            history.push('/uploadQuiz');
            handleDrawerClose();
        }
    }, {
        text: 'Dashboard',
        icon: <TrendingUpIcon />,
        onClick: () => {
            history.push('/dashboard');
            handleDrawerClose();
        }
    }, {
        text: 'Settings',
        icon: <SettingsIcon />,
        onClick: () => {
            history.push('/settings');
            handleDrawerClose();
        }
    }, {
        text: 'Logout',
        icon: <ArrowBackIcon />,
        onClick: () => {
            history.push('/logout');
            handleDrawerClose();
        }
    }];


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
                    {itemList.map((item, index) => {
                        const { text, icon, onClick } = item;
                        return (
                            <ListItem button key={index} className="listItem" onClick={onClick}>
                                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                <ListItemText primary={text} />
                            </ListItem>
                        );
                    })}
                </List>

            </Drawer>
        </div>
    );
}

export default withRouter(Sidebar);


