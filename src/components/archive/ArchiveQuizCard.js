import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {archiveQuiz, createQuiz, deleteQuiz, unarchiveQuiz} from "../../redux/api/apiActions";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import SettingsIcon from "@material-ui/icons/Settings";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { Route, useRouteMatch } from "react-router-dom";



const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 275,
        // width: "300",
        boxShadow: '0 0 10px 5px rgba(100, 100, 100, 0.3)',
        margin: "10px",
        '&:hover': {
            boxShadow: '0 0 10px 5px rgba(25, 25, 25, 0.4)',
        },
        backgroundColor: "#ebebd2"
    },
    oldishColor: {
        color: "#ebebd2"
    },
    innerButton: {
        height: "100%",
        width: "100%",
    },
    settingsButton: {
        // margin: "7px",
        zIndex: "10",
        margin: "3px",
        position: "absolute",
        top: "0px",
        right: "0px",
        color: "#aaad7b"
    },
    quizName: {
        color: "#31a1ad"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function ArchiveQuizCard({ quiz, forceUpdate }) {
    const classes = useStyles();

    const history = useHistory();
    const dispatch = useDispatch();

    const {url} = useRouteMatch();


    const [anchorEl, setAnchorEl] = useState(null);


    const handleClick = () => {
        history.push(`${url}/${quiz.id}`)
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
        setAnchorEl(null);
        // read name and questions ids

        let quizDto = {
            name: quiz.name,
            questionsIds: quiz.questions.map(q => q.id)
        }

        // create quiz with this data
        dispatch(createQuiz(quizDto))
    };

    const handleEdit = (event) => {
        event.stopPropagation();
        console.log("handleEdit");
        setAnchorEl(null);
    };

    const handleUnarchive = (event) => {
        event.stopPropagation();
        console.log("handleArchive");
        setAnchorEl(null);

        dispatch(unarchiveQuiz(quiz.id))
        forceUpdate();
    };

    const handleDelete = (event) => {
        event.stopPropagation();
        console.log("handleDelete");
        setAnchorEl(null);

        dispatch(deleteQuiz(quiz.id))
    };

    return (
        <Card className={classes.root} >
            <Button className={classes.innerButton} onClick={handleClick}>
                <CardContent>
                    <ClickAwayListener onClickAway={handleClickAway} >
                        <div>
                            <SettingsIcon
                                aria-controls="assign-menu"
                                className={classes.settingsButton}
                                onClick={settingsClicked}/>
                            <Menu
                                id="assign-menu"
                                className={classes.oldishColor}
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem classes={classes.oldishColor} onClick={handleCopy}>Copy</MenuItem>
                                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                                <MenuItem onClick={handleUnarchive}>Unarchive</MenuItem>
                                <MenuItem onClick={handleDelete}>Delete</MenuItem>
                            </Menu>
                        </div>
                    </ClickAwayListener>
                    <Typography className={classes.quizName} variant="h5" component="h2">
                        {quiz.name}
                    </Typography>
                    <Typography component={'div'} className={classes.pos} color="textSecondary">
                        {quiz.questions.length} questions
                    </Typography>
                    <Typography variant="body2" component="p">
                        {quiz.description}
                    </Typography>
                    <Typography component={'div'} className={classes.pos} color="textSecondary">
                        # {quiz.id}
                    </Typography>
                </CardContent>
            </Button>
        </Card>
    )
}

export default ArchiveQuizCard;