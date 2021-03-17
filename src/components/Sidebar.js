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
import StorageIcon from '@material-ui/icons/Storage';
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import UploadIcon from '@material-ui/icons/Backup';
import ArchiveIcon from '@material-ui/icons/Archive';
import Drawer from "@material-ui/core/Drawer";
import { withRouter } from "react-router-dom";
import {isStudent} from "../redux/priviliges";

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
);

function Sidebar({ open, handleDrawerOpen, handleDrawerClose, history }) {
    const classes = useStyles();

    let itemList = [{
        text: 'Account',
        teacherOnly: false,
        icon: <PersonIcon />,
        onClick: () => {
            history.push('/account');
            handleDrawerClose();
        }
    }, {
        text: 'Students',
        teacherOnly: true,
        icon: <PeopleIcon />,
        onClick: () => {
            history.push('/students');
            handleDrawerClose();
        }
    }, {
        text: 'Quizzes',
        teacherOnly: true,
        icon: <StorageIcon />,
        onClick: () => {
            history.push('/quizzes');
            handleDrawerClose();
        }
    }, {
        text: 'Assignments',
        teacherOnly: false,
        icon: <AssignmentIcon />,
        onClick: () => {
            history.push('/assignments');
            handleDrawerClose();
        }
    }, {
        text: 'Upload Quiz',
        teacherOnly: true,
        icon: <UploadIcon />,
        onClick: () => {
            history.push('/uploadQuiz');
            handleDrawerClose();
        }
    }, {
        text: 'Dashboard',
        teacherOnly: false,
        icon: <TrendingUpIcon />,
        onClick: () => {
            history.push('/dashboard');
            handleDrawerClose();
        }
    }, {
        text: 'Archive',
        teacherOnly: true,
        icon: <ArchiveIcon />,
        onClick: () => {
            history.push('/archive');
            handleDrawerClose();
        }
    },
        {
        text: 'Settings',
        teacherOnly: false,
        icon: <SettingsIcon />,
        onClick: () => {
            history.push('/settings');
            handleDrawerClose();
        }
    }, {
        text: 'Logout',
        teacherOnly: false,
        icon: <ArrowBackIcon />,
        onClick: () => {
            history.push('/logout');
            handleDrawerClose();
        }
    }];

    itemList = itemList.filter(item => {
        if (isStudent) {
            return !item.teacherOnly;
        } else {
            return true;
        }
    });


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


