import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import QuestionQuizCard from "./QuestionQuizCard";
import Button from "@material-ui/core/Button";
import ReplyIcon from '@material-ui/icons/Reply';
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {fetchAllGroups, fetchTeacherAssignments, saveAssignment, saveGroupAssignment} from "../../redux/api/apiActions";
import {useDispatch, useSelector} from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Grid from '@material-ui/core/Grid';
import {myHoverShadow, myShadow} from "../../redux/globalStyleConst";



const useStyles = makeStyles((theme) => ({
    main: {
        alignItems: "flex-start"
    },

    headerText: {
        textAlign: "center"
    },
    question: {
        display : "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    description: {
        marginBottom: 50
    },
    submittables: {
        alignContent: "space-between"
    },
    buttonsContainer: {
        // display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(1)
    },
    assignToButton: {
        // alignSelf: "flex-start",
        boxShadow: myShadow,
        // margin: "10px",
        // fontSize: 'x-small',
        '&:hover': {
            boxShadow: myHoverShadow,
        }
    },
    replyIcon: {
        transform: "scaleX(-1)",
        marginLeft: 15
    },
    myTextFieldVisible: {
        // marginLeft: 15,
        // minWidth: 300,
        // maxWidth: 300
        width: '100%'
    },
    hiddenClass: {
        display: "none"
    },
    goButton: {
        // alignSelf: "flex-end",
        // marginLeft: 15,
        // marginRight: 15,
        boxShadow: '0 0 10px 5px rgba(100, 100, 100, 0.3)',
        // margin: "10px",
        '&:hover': {
            boxShadow: '0 0 10px 5px rgba(25, 25, 25, 0.4)',
        },
    },
    groupMenu: {
        // minWidth: 150,
        // maxWidth: 150,
        boxShadow: myShadow,
        // margin: "10px",
        '&:hover': {
            boxShadow: myHoverShadow,
        }
    },
    emptyTag: {

    }}
));

function WholeQuiz({ quizzes }) {
    const classes = useStyles();
    const history = useHistory();
    const { quizId } = useParams();
    const dispatch = useDispatch();

    const groups = useSelector(state => {
        if (state.api.allGroups !== undefined) {
            return state.api.allGroups.groups;
        }
        return []
    });

    const [studentTAreaClass, setStudentTAreaClass] = useState(classes.hiddenClass);
    const [nameTAreaClass, setNameTAreaClass] = useState(classes.hiddenClass);
    const [goButtonClass, setGoButtonClass] = useState(classes.hiddenClass);
    const [goButtonClass2, setGoButtonClass2] = useState(classes.hiddenClass);


    const [assignButtonClass, setAssignButtonClass] = useState(classes.assignToButton);
    const [assignButGridClass, setAssignButGridClass] = useState(classes.emptyTag);
    const [stdOrGroupClass, setStdOrGroupClass] = useState(classes.emptyTag);
    const [stdOptionGrid, setStdOptionGrid] = useState(classes.emptyTag);

    const [studentButton, setStudentButton] = useState(classes.hiddenClass);
    const [groupButton, setGroupButton] = useState(classes.hiddenClass);
    const [groupMenuClass, setGroupMenuClass] = useState(classes.hiddenClass);
    const [stdGrid, setStdGrid] = useState(classes.hiddenClass);
    const [email, setEmail] = useState("");
    const [assignName, setAssignName] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuButtonName, setMenuButtonName] = useState("Select Group");
    const [groupId, setGroupId] = useState(null);
    const [isStudSelected, setStudSelected] = useState(false);
    const [isGroupSelected, setGroupSelected] = useState(false);


    useEffect(() => {
        dispatch(fetchAllGroups())
    }, []);

    console.log("Quiz id: " + quizId);

    const selectedQuiz = quizzes.find(quiz => quiz.id === Number(quizId));

    const handleAssignButton = () => {
        setStudentButton(classes.assignToButton);
        setGroupButton(classes.assignToButton);
        setAssignButtonClass(classes.hiddenClass);
        setAssignButGridClass(classes.hiddenClass);
        setStdGrid(classes.emptyTag);
    };

    const handleStudentButton = () => {
        setStudentTAreaClass(classes.myTextFieldVisible);
        setStudentButton(classes.hiddenClass);
        setGroupButton(classes.hiddenClass);
        setStdGrid(classes.hiddenClass);
        setStudSelected(true);
        setStdOrGroupClass(classes.hiddenClass)
        setNameTAreaClass(classes.myTextFieldVisible);
    };

    const handleGroupButton = () => {
        setGroupMenuClass(classes.groupMenu);
        setStudentButton(classes.hiddenClass);
        setGroupButton(classes.hiddenClass);
        setNameTAreaClass(classes.myTextFieldVisible);
        setGroupSelected(true);
        setStdOrGroupClass(classes.hiddenClass)

    };

    const showGoButton = () => {
        setGoButtonClass(classes.goButton);
    };

    const showGoButton2 = () => {
        setGoButtonClass2(classes.goButton);
    };

    const buildDto = () => {
        let assignDTO = {
            name: "",
            quizId: "",
            studentEmails: []
        };

        assignDTO.name = assignName;
        assignDTO.quizId = selectedQuiz.id;

        assignDTO.studentEmails = new Array(email);
        return assignDTO;
    };

    const buildToGroupDto = () => {
        let groupAssignDto = {
            name: "",
            quizId: "",
            groupId: ""
        };

        groupAssignDto.name = assignName;
        groupAssignDto.quizId = selectedQuiz.id;

        // assign group id
        groupAssignDto.groupId = groupId;

        if (groupAssignDto.name === "" ||
            groupAssignDto.quizId === "" ||
            groupAssignDto.groupId === "") {
            // alert message input all
            alert("Input all data");
        }

        return groupAssignDto;
    };

    const handleGoButton = () => {
        if (isStudSelected) {
            dispatch(saveAssignment(buildDto()));
        }
        if (isGroupSelected) {
            dispatch(saveGroupAssignment(buildToGroupDto()))
        }
        dispatch(fetchTeacherAssignments());
        history.push("/assignments");
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
        // showGoButton();
        showGoButton2();
    };



    return (
        <div className={classes.main}>
            <h1 className={classes.headerText}>{selectedQuiz.name}</h1>
            <h2 className={classes.description}>{selectedQuiz.description}</h2>

            <div className={classes.buttonsContainer}>
                <div className={classes.submittables}>
                    {/*<Button*/}
                    {/*    className={classes.assignToButton}*/}
                    {/*    variant="outlined"*/}
                    {/*    onClick={handleAssignButton}>*/}
                    {/*    Assign to*/}
                    {/*    <ReplyIcon className={classes.replyIcon} />*/}
                    {/*</Button>*/}

                    {/*<Button*/}
                    {/*    className={studentButton}*/}
                    {/*    variant="outlined"*/}
                    {/*    onClick={handleStudentButton}>*/}
                    {/*    Student?*/}
                    {/*</Button>*/}

                    {/*<Button*/}
                    {/*    className={groupButton}*/}
                    {/*    variant="outlined"*/}
                    {/*    onClick={handleGroupButton}>*/}
                    {/*    Group?*/}
                    {/*</Button>*/}

                    <Grid container
                          xs={12} sm={12} md={9} lg={6} xl={4}
                    >
                            <Grid item
                                  className={assignButGridClass}
                                  xs={6} sm={4} spacing={8}>
                                <Button
                                    className={assignButtonClass}
                                    variant="outlined"
                                    onClick={handleAssignButton}>
                                    Assign to
                                    <ReplyIcon className={classes.replyIcon} />
                                </Button>
                            </Grid>
                            <Grid container item
                                  direction="row"
                                  className={stdOrGroupClass}
                                  justify="space-between"
                            >
                                <Grid item xs={5} sm={4} md={3} lg={3} xl={1}>
                                    <Button
                                        className={studentButton}
                                        variant="outlined"
                                        onClick={handleStudentButton}>
                                        Student?
                                    </Button>
                                </Grid>
                                <Grid item container justify='flex-end'
                                      xs={5} sm={4} md={3} lg={3} xl={1}>
                                    <Button
                                        className={groupButton}
                                        variant="outlined"
                                        onClick={handleGroupButton}>
                                        Group?
                                    </Button>
                                </Grid>
                            </Grid>

                        <Grid container
                              className={stdOptionGrid}
                              justify="space-between"
                              alignItems="flex-end"
                        >
                            <Grid className={studentTAreaClass} item xs={5} sm={5}>
                                <TextField
                                    className={studentTAreaClass}
                                    onChange={event => {
                                        setEmail(event.target.value);
                                        console.log("Email: " + email);
                                        if (email !== "") {
                                            showGoButton();
                                        }
                                    }}
                                    id="standard-basic"
                                    label="Student email"
                                />
                            </Grid>
                            <Grid item xs={2} sm={2} justify='flex-end'>
                                <Button
                                    className={goButtonClass}
                                    variant="outlined"
                                    onClick={() => {
                                        handleGoButton();
                                    }}>
                                    Go
                                </Button>
                            </Grid>
                        </Grid>

                        {/*groups dropdown menu*/}
                        <Grid container item
                              xs={12} sm={12}
                              justify="space-between"
                        >
                            <Grid item xs={8} sm={8}>
                                <Button
                                    aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    // fullWidth
                                    className={groupMenuClass}
                                    onClick={handleMenuClick}
                                >
                                    {menuButtonName}
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                >
                                    {groups.map(group => {
                                        return (<MenuItem
                                            onClick={() => {
                                                handleMenuClose();
                                                setMenuButtonName(group.name);
                                                setGroupId(group.id)
                                            }}>{group.name}
                                        </MenuItem>)
                                    })}
                                </Menu>
                            </Grid>

                            <Grid container item xs={2} sm={2} justify='flex-end'>
                                <Button
                                    className={goButtonClass2}
                                    variant="outlined"
                                    onClick={() => {
                                        handleGoButton();
                                    }}>
                                    Go
                                </Button>
                            </Grid>

                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <div>
                                <TextField
                                    className={nameTAreaClass}
                                    onChange={event => {
                                        setAssignName(event.target.value);
                                        console.log("assignName: " + assignName);
                                    }}
                                    id="standard-basic"
                                    label="Name Assignment"
                                />
                            </div>
                        </Grid>




                    </Grid>


                    {/*<div className={groupMenuClass}>*/}
                    {/*    <Button*/}
                    {/*        aria-controls="simple-menu"*/}
                    {/*        aria-haspopup="true"*/}
                    {/*        fullWidth*/}
                    {/*        onClick={handleMenuClick}*/}
                    {/*    >*/}
                    {/*        {menuButtonName}*/}
                    {/*    </Button>*/}
                    {/*    <Menu*/}
                    {/*        id="simple-menu"*/}
                    {/*        anchorEl={anchorEl}*/}
                    {/*        keepMounted*/}
                    {/*        open={Boolean(anchorEl)}*/}
                    {/*        onClose={handleMenuClose}*/}
                    {/*    >*/}
                    {/*        {groups.map(group => {*/}
                    {/*            return (<MenuItem*/}
                    {/*                onClick={() => {*/}
                    {/*                    handleMenuClose();*/}
                    {/*                    setMenuButtonName(group.name);*/}
                    {/*                    setGroupId(group.id)*/}
                    {/*                }}>{group.name}*/}
                    {/*            </MenuItem>)*/}
                    {/*        })}*/}
                    {/*    </Menu>*/}
                    {/*</div>*/}


                    {/*<TextField*/}
                    {/*    className={studentTAreaClass}*/}
                    {/*    onChange={event => {*/}
                    {/*        setEmail(event.target.value);*/}
                    {/*        console.log("Email: " + email);*/}
                    {/*        if (email !== "") {*/}
                    {/*            showGoButton();*/}
                    {/*        }*/}
                    {/*    }}*/}
                    {/*    id="standard-basic"*/}
                    {/*    label="Student email"*/}
                    {/*/>*/}
                    {/*<Button*/}
                    {/*    className={goButtonClass}*/}
                    {/*    variant="outlined"*/}
                    {/*    onClick={() => {*/}
                    {/*        handleGoButton();*/}
                    {/*    }}>*/}
                    {/*    Go*/}
                    {/*</Button>*/}
                </div>
            </div>



            {/*<div>*/}
            {/*    <TextField*/}
            {/*        className={nameTAreaClass}*/}
            {/*        onChange={event => {*/}
            {/*            setAssignName(event.target.value);*/}
            {/*            console.log("assignName: " + assignName);*/}
            {/*        }}*/}
            {/*        id="standard-basic"*/}
            {/*        label="Name Assignment"*/}
            {/*    />*/}
            {/*</div>*/}

            <div>
                {selectedQuiz.questions.map((question, index) => {
                    return (
                        <QuestionQuizCard
                            key={question.id}
                            quiz={question}
                            ordinal={index + 1}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default WholeQuiz;