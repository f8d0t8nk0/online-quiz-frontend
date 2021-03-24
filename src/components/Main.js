import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from "clsx";
import {drawerDurationSec} from "../redux/globalStyleConst";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    content: {
        // flexGrow: 0,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: drawerDurationSec,
        }),
        // marginLeft: -drawerWidth, // if enabled content adjusts the size when drawer opens
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: drawerDurationSec,
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
                <div className={classes.contentHeader} >
                    {children}
                </div>
            </main>
        </div>
    );
}

export default Main;