import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Account from "./pages/Account";
import Students from "./pages/Students";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import Main from "./components/Main";
import Home from "./pages/Home";
import Assignments from './pages/Assignments'
import UploadQuiz from "./pages/UploadQuiz";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: '#c0caca',
    backgroundColor: '#212121',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  contentHeader: {
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <div className={classes.root}>
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
            <Typography variant="h6" noWrap>
              Homework System
            </Typography>
          </Toolbar>
        </AppBar>

        <Router>
          <Sidebar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
          <Switch>
            <Main open={open}>
              <Route exact path="/" render={props => <Home {...props} />} />
              <Route exact path="/account" render={props => <Account {...props} />} />
              <Route exact path="/students" render={props => <Students {...props} />} />
              <Route exact path="/assignments" render={props => <Assignments {...props} />} />
              <Route exact path="/uploadQuiz" render={props => <UploadQuiz {...props} />} />
              <Route exact path="/dashboard" render={props => <Dashboard {...props} />} />
              <Route exact path="/settings" render={props => <Settings {...props} />} />
              <Route exact path="/logout" render={props => <Logout {...props} />} />
            </Main>

          </Switch>
        </Router>

      </div>
  );
}
