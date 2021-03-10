import React, {useState} from 'react';
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import {firstSelectedIds, readParseQuestionsFields} from '../../redux/gui/guiActions';
import {createQuestions, fetchQuestions} from '../../redux/api/apiActions';
import {connect, useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from "redux";


const useStyles = makeStyles((theme) => ({
    pasteQuestions : {
        width: "600px",
        margin: "10px"
    },
    submitDiv : {
        display : "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        textAlign: "left"
    },
    submitButton : {
        width: "fit-content",
        margin: "10px",
        borderRadius: "100em",
        padding: "10px 25px",
        paddingLeft: "25px",
        font: "13px/20px 'Lucida Grande', Verdana, sans-serif",
        transition: "all .1s",
        fontSize: "15px",
        color: "#fcfbfb",
        textShadow: "0 0 2px rgba(0, 0, 0, .7)",
        backgroundColor: "#303030",
        border: "solid #797878 1px",
        backgroundImage: "linear-gradient(to bottom, #D9D8D8, #868585)"
    }
}));

// function ParseQuestions({ nextStep, setQuizzes, selectedQIds }) {
function ParseQuestions(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState("");
    const [answers, setAnswers] = useState("");
    // const myQuestions = useSelector(state => {
    //     console.log("In useSelector: " + JSON.stringify(state));
    //     return state.api.createQReq.questions;
    // });

    const buildDto = () => {
        return {
            questionsText: questions,
            answersText: answers
        }
    };

    const next = () => {
        // let qIds = myQuestions.map(q => q.id);
        // props.setSelectedQIds([...props.selectedQIds, ...qIds]);
        // props.setQuizzes(myQuestions);
        props.nextStep();
    };

    // const saveQuestion = () => {
    //     // props.createQs(buildDto(), seePayload);
    //
    //     // dispatch((dispatch) => fetchQuestions(buildDto(), dispatch));
    //     // dispatch(() => fetchQuestions(buildDto()));
    //     props.fetchQuestions(buildDto()).then(() => seePayload());
    //
    //     console.log("57: " + props.createdQuestions);
    //
    //     let qIds = props.createdQuestions.map(q => q.id);
    //
    //     props.setSelectedQIds([...props.selectedQIds, ...qIds]);
    //
    //     console.log("Created questions: " + props.createdQuestions);
    //     console.log("Selected ids in ParseQuestions: " + qIds);
    //
    //     // props.setQuizzes(props.createdQuestions);
    //     // props.nextStep();
    // };

    // // it actually worked before
    // const printData = async () => {
    //     let createQuestionsDTO = {
    //         questionsText: "",
    //         answersText: ""
    //     };
    //
    //     createQuestionsDTO.questionsText = questions;
    //     createQuestionsDTO.answersText = answers;
    //
    //     // send to API
    //     const host = `http://localhost:8080/`;
    //     const createEndpoint = `api/v1/teacher/question/create`;
    //     const url = `${host}${createEndpoint}`;
    //
    //     let savedQuizzes;
    //
    //
    //
    //     await axios.post(url, createQuestionsDTO).then( res => {
    //             console.log(res);
    //             console.log(res.data);
    //
    //             savedQuizzes = res.data;
    //
    //             let qIds = savedQuizzes.map(function (thisQuiz) {
    //                 return thisQuiz.id;
    //             });
    //
    //             props.setSelectedQIds([...props.selectedQIds, ...qIds]);
    //
    //             // todo delete
    //             console.log("Selected ids in ParseQuestions: " + props.selectedQIds);
    //
    //             props.setQuizzes(res.data);
    //             props.nextStep();
    //     });
    //
    // };

    return (
        <div className={classes.submitDiv}>
            <Typography component={'div'}  >
                <h2>Upload Your Quiz</h2>
            </Typography>

            <TextareaAutosize
                className={classes.pasteQuestions}
                onChange={event => setQuestions(event.target.value)}
                placeholder="Paste questions' text here: "
                aria-label="minimum height"
                rowsMin={10} />

            <TextareaAutosize
                className={classes.pasteQuestions}
                onChange={event => setAnswers(event.target.value)}
                placeholder="Paste answers' text here: "
                aria-label="minimum height"
                rowsMin={5} />

            <Button
                className={classes.submitButton}
                onClick= {() => {
                    dispatch(fetchQuestions(buildDto()))
                        // .then(dispatch(firstSelectedIds()));
                    next();
                }}>Submit
            </Button>

        </div>
    );
}

export default ParseQuestions;