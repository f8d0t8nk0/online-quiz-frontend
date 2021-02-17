import React, {useState} from 'react';
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import authAxios from "../App";

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

function ParseQuestions({ nextStep, setQuizzes }) {

    const classes = useStyles();
    const [questions, setQuestions] = useState("");
    const [answers, setAnswers] = useState("");

    const printData = async () => {
        let createQuestionsDTO = {
            questionsText: "",
            answersText: ""
        }

        createQuestionsDTO.questionsText = questions;
        createQuestionsDTO.answersText = answers;

        let questionIds;
        // send to API
        const host = `http://localhost:8080/`;
        // const host = 'https://online-quiz-webservice.herokuapp.com/';
        const createEndpoint = `api/v1/teacher/question/create`;
        const url = `${host}${createEndpoint}`;

        await axios.post(url, createQuestionsDTO).then( res => {
                console.log(res);
                console.log(res.data);
                questionIds = res.data;
                setQuizzes(res.data);
                nextStep();
        });

        // console.log(res);
        // console.log(res.data);
        // questionIds = res.data;
        // setQuizzes(res.data);
        // nextStep();


        // authAxios.post(url, createQuestionsDTO).then(res => {
        //     console.log(res);
        //     console.log(res.data);
        //     questionIds = res.data;
        //     setQuizzes(res.data);
        //     nextStep();
        // }).then(res2 => {
        //     console.log("Second callback: " + JSON.stringify(questionIds));
        // })

    }

    return (
        <div className={classes.submitDiv}>
            <Typography >
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
                onClick={printData}>Submit
            </Button>

        </div>
    );
}

export default ParseQuestions;