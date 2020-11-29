import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import clsx from "clsx";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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

function Main({ open,  children}) {
    const classes = useStyles();

    return (
        <div>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.contentHeader} />
                {children}

            </main>

        </div>
    );
}

export default Main;