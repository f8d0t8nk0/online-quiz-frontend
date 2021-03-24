import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { useHistory } from "react-router-dom";
import SettingsIcon from '@material-ui/icons/Settings';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {myHoverShadow, myShadow} from "../../redux/globalStyleConst";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 275,
        // width: "300",
        boxShadow: myShadow,
        margin: '8px',
        // margin: "0 0 0 0",
        '&:hover': {
            boxShadow: myHoverShadow
        }
    },
    completedColor: {
        backgroundColor: '#d4fad9'
    },
    settingsButton: {
        // margin: "7px",
        zIndex: "10",
        margin: "3px",
        position: "absolute",
        top: "0px",
        right: "0px"
    },
    innerButton: {
        height: "100%",
        width: "100%",
    },
    quizName: {
        color: "#31a1ad"
    },
    studentName: {
        color: "#ad8154"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function AssignmentCard({ assignment, setSelectedAssignment, nextStep, url }) {

    const classes = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = () => {
        setSelectedAssignment(assignment);
        // nextStep();
        history.push(`${url}/${assignment.id}`);
    };

    const settingsClicked = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
        console.log("settingsClicked!!!");
    };

    const handleClose = (event) => { // todo dl
        event.stopPropagation();
        console.log("handleClose")
        setAnchorEl(null);
    };

    const handleClickAway = (event) => {
        event.stopPropagation();
        console.log("handleClickAway");
        setAnchorEl(null);
    };

    const handleCopy = (event) => {
        event.stopPropagation();
        console.log("handleCopy");
    };
    const handleArchive = (event) => {
        event.stopPropagation();
        console.log("handleArchive");

    };
    const handleDelete = (event) => {
        event.stopPropagation();
        console.log("handleDelete");
    };

    return (
        <Card className={assignment.isCompleted ? `${classes.root} ${classes.completedColor}` : `${classes.root}`} >
            <Button className={classes.innerButton} onClick={handleClick}>
                <CardContent>
                    <ClickAwayListener onClickAway={handleClickAway} >
                        <div>
                            <SettingsIcon aria-controls="assign-menu" className={classes.settingsButton} onClick={settingsClicked}/>
                            <Menu
                                id="assign-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleCopy}>Copy</MenuItem>
                                <MenuItem onClick={handleArchive}>Archive</MenuItem>
                                <MenuItem onClick={handleDelete}>Delete</MenuItem>
                            </Menu>
                        </div>
                    </ClickAwayListener>

                    <Typography className={classes.quizName} variant="h5" component="h2">
                        {assignment.name}
                    </Typography>
                    <Typography component={'div'} className={classes.pos} color="textSecondary">
                        {assignment.quizFullDto.name}
                    </Typography>
                    {/*<Typography variant="body2" component="p">*/}
                    {/*    {assignment.description}*/}
                    {/*</Typography>*/}
                    <Typography component={'div'} className={classes.pos} color="textSecondary">
                        # {assignment.id}
                    </Typography>
                    <Typography className={classes.studentName} variant="h6" component="h3">
                        Student name
                    </Typography>
                </CardContent>
            </Button>
        </Card>
    );
}

export default AssignmentCard;