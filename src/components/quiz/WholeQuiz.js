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


const useStyles = makeStyles({
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
        display: 'flex',
        flexDirection: 'row'
    },
    assignToButton: {
        alignSelf: "flex-start",
        boxShadow: '0 0 10px 5px rgba(100, 100, 100, 0.3)',
        margin: "10px",
        '&:hover': {
            boxShadow: '0 0 10px 5px rgba(25, 25, 25, 0.4)',
        }
    },
    replyIcon: {
        transform: "scaleX(-1)",
        marginLeft: 15
    },
    myTextFieldHidden: {
        display: "none"
    },
    myTextFieldVisible: {
        marginLeft: 15,
        minWidth: 300,
        maxWidth: 300
    },
    goButtonHidden: {
        display: "none"
    },
    goButton: {
        alignSelf: "flex-end",
        marginLeft: 15,
        marginRight: 15,
        boxShadow: '0 0 10px 5px rgba(100, 100, 100, 0.3)',
        // margin: "10px",
        '&:hover': {
            boxShadow: '0 0 10px 5px rgba(25, 25, 25, 0.4)',
        },
    },
    groupMenu: {
        minWidth: 150,
        maxWidth: 150,
        boxShadow: '0 0 10px 5px rgba(100, 100, 100, 0.3)',
        margin: "10px",
        '&:hover': {
            boxShadow: '0 0 10px 5px rgba(25, 25, 25, 0.4)',
        }
    }
});

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

    const [studentTAreaClass, setStudentTAreaClass] = useState(classes.myTextFieldHidden);
    const [nameTAreaClass, setNameTAreaClass] = useState(classes.myTextFieldHidden);
    const [goButtonClass, setGoButtonClass] = useState(classes.goButtonHidden);
    const [studentButton, setStudentButton] = useState(classes.goButtonHidden);
    const [groupButton, setGroupButton] = useState(classes.goButtonHidden);
    const [groupMenuClass, setGroupMenuClass] = useState(classes.goButtonHidden);
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
        setStudentButton(classes.goButton);
        setGroupButton(classes.goButton);
    };

    const handleStudentButton = () => {
        setStudentTAreaClass(classes.myTextFieldVisible);
        setStudentButton(classes.goButtonHidden);
        setGroupButton(classes.goButtonHidden);
        setStudSelected(true);
    };

    const handleGroupButton = () => {
        setGroupMenuClass(classes.groupMenu);
        setStudentButton(classes.goButtonHidden);
        setGroupButton(classes.goButtonHidden);
        setNameTAreaClass(classes.myTextFieldVisible);
        setGroupSelected(true);
    };

    const showGoButton = () => {
        setGoButtonClass(classes.goButton);
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
        showGoButton();
    };



    return (
        <div className={classes.main}>
            <h1 className={classes.headerText}>{selectedQuiz.name}</h1>
            <h2 className={classes.description}>{selectedQuiz.description}</h2>

            <div className={classes.buttonsContainer}>
                <div className={classes.submittables}>
                    <Button
                        className={classes.assignToButton}
                        variant="outlined"
                        onClick={handleAssignButton}>
                        Assign to
                        <ReplyIcon className={classes.replyIcon} />
                    </Button>

                    <Button
                        className={studentButton}
                        variant="outlined"
                        onClick={handleStudentButton}>
                        Student?
                    </Button>

                    <Button
                        className={groupButton}
                        variant="outlined"
                        onClick={handleGroupButton}>
                        Group?
                    </Button>


                    <div className={groupMenuClass}>
                        <Button
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            fullWidth
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
                    </div>


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
                    <Button
                        className={goButtonClass}
                        variant="outlined"
                        onClick={() => {
                            handleGoButton();
                        }}>
                        Go
                    </Button>
                </div>
            </div>



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