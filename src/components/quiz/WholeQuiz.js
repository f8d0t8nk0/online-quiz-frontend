import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import QuestionQuizCard from "./QuestionQuizCard";
import Button from "@material-ui/core/Button";
import ReplyIcon from '@material-ui/icons/Reply';
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {fetchTeacherAssignments, saveAssignment} from "../../redux/api/apiActions";
import {useDispatch} from "react-redux";


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
    }
});

function WholeQuiz({ quizzes }) {
    const classes = useStyles();
    const history = useHistory();
    const { quizId } = useParams();
    const dispatch = useDispatch();

    const [tAreaClass, setTAreaClass] = useState(classes.myTextFieldHidden);
    const [goButtonClass, setGoButtonClass] = useState(classes.goButtonHidden);
    const [email, setEmail] = useState("");
    const [assignName, setAssignName] = useState("");

    console.log("Quiz id: " + quizId);

    const selectedQuiz = quizzes.find(quiz => quiz.id === Number(quizId));

    const handleAssignButton = () => {
        setTAreaClass(classes.myTextFieldVisible);
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

    const handleGoButton = () => {
        // // send to API
        // const host = `http://localhost:8080/`;
        // // const host = 'https://online-quiz-webservice.herokuapp.com/';
        // const saveAssignmentEndpoint = `api/v1/teacher/assignment/save`;
        // const url = `${host}${saveAssignmentEndpoint}`;
        //
        // let assignDTO = buildDto();
        //
        // console.log("assignDTO: " + JSON.stringify(assignDTO, null, 2));
        //
        // axios.post(url, assignDTO).then( res => {
        //     // todo delete
        //     console.log(res);
        //     console.log("Id of saved assignment: " + res.data);
        // });
        dispatch(saveAssignment(buildDto()));
        dispatch(fetchTeacherAssignments());
        history.push("/assignments");
    };

    return (
        <div className={classes.main}>
            <h1 className={classes.headerText}>{selectedQuiz.name}</h1>
            <h2 className={classes.description}>{selectedQuiz.description}</h2>


            <div className={classes.submittables}>
                <Button
                    className={classes.assignToButton}
                    variant="outlined"
                    onClick={handleAssignButton}>
                    Assign to
                    <ReplyIcon className={classes.replyIcon} />
                </Button>

                <TextField
                    className={tAreaClass}
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

            <div>
                <TextField
                    className={tAreaClass}
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