import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Sidebar from "../components/Sidebar";
import {Link, Route, Switch, useRouteMatch} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Account from "../pages/Account";
import Students from "../pages/Students";
import Settings from "../pages/Settings";
import Dashboard from "../pages/Dashboard";
import Logout from "../pages/Logout";
import Main from "../components/Main";
import Home from "../pages/Home";
import Assignments from '../pages/Assignments'
import UploadQuiz from "../pages/UploadQuiz";
import Login from "../components/Login";
import MyQuizzes from "../pages/MyQuizzes";
import Register from "./Register";
import {useSelector} from "react-redux";
import {canShowQuizLink, isStudent, isTeacher} from "../redux/priviliges";
import AssignmentReportMini from "./radio/AssignmentReportMini";
import StudentSidebarButtons from "./StudentSidebarButtons";
import TeacherSidebarButtons from "./TeacherSidebarButtons";
import Groups from "../pages/Groups";
import CreateGroup from "./CreateGroup";
import {drawerDurationSec} from "../redux/globalStyleConst";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block', // it was flex before
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            // easing: theme.transitions.easing.sharp,
            duration: drawerDurationSec,
        }),
        color: '#c0caca',
        backgroundColor: '#212121',
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            // easing: theme.transitions.easing.easeOut,
            duration: drawerDurationSec,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    loginButton: {
        color: '#aaaaaa'
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#eae9e9',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            // easing: theme.transitions.easing.sharp,
            duration: drawerDurationSec,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            // easing: theme.transitions.easing.easeOut,
            duration: drawerDurationSec,
        }),
        marginLeft: 0,
    },
    contentHeader: {
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    linkHome: {
        textDecoration: 'none',
        color: '#c0caca',
        '&:hover': {
            color: '#696969'
        }
    }
}));

export default function MainApp() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const username = useSelector(state => {
        let loginDTO = state.api.login.loginDTO;
        if (loginDTO !== undefined) {
            return loginDTO.username;
        }
    });

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const history = useHistory();

    return (
        <div className={classes.root}>
            <div>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link to="/" className={classes.linkHome} >
                            <Typography variant="h6" noWrap>
                                Sendmequiz
                            </Typography>
                        </Link>
                        <IconButton
                            onClick={() => history.push('/login')}
                            className={classes.loginButton}>
                            <PersonPinIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            {username}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>


            <Sidebar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
            <Switch>
            <Main open={open}>
                {isStudent ? <StudentSidebarButtons/> : isTeacher ? <TeacherSidebarButtons/> : <StudentSidebarButtons/>}
            </Main>

            </Switch>
            <Route path="/login" ><Login/></Route>
            <Route  path="/register" ><Register/></Route>
            <Route exact path='/groups'><Groups/></Route>
            <Route path='/groups/create'><CreateGroup/></Route>


        </div>
    );
}
