import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import TestQComponent from "../components/TestQComponent";

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
        width: "50px",
        margin: "10px",
        backgroundColor: '#b7b5b5',
    }
}));

function Assignments(props) {

    const classes = useStyles();
    const [questions, setQuestions] = useState("");
    const [answers, setAnswers] = useState("");

    const printData = () => {
        let createQuestionsDTO = {
            questionsText : "",
            answersText : ""
        }

        createQuestionsDTO.questionsText = questions;
        createQuestionsDTO.answersText = answers;

        let questionIds;
        // send to API
        // const host = `http://localhost:8080/`;
        // const createEndpoint = `api/v1/teacher/question/create`;
        const url = `http://localhost:8080/api/v1/teacher/question/create`
        axios.post(url, createQuestionsDTO).then(res => {
            console.log(res);
            console.log(res.data);
            questionIds = res.data;
            setQuestions(res.data);
            return(
                <TestQComponent questions={questions} />
            )

            // const getByIdsEndpoint = `http://localhost:8080/api/v1/teacher/question/ids`;
            // axios.post(getByIdsEndpoint, questionIds).then(res2 => {
            //     console.log("full questions: " + res2.data);
            //     console.log(JSON.stringify(res2.data));
            // })
        }).then(res2 => {
                console.log("Second callback: " + JSON.stringify(questionIds));

        })

    }

    return (
        <div className={classes.submitDiv}>
            <Typography paragraph>
                <h1>Assignments page</h1>

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

export default Assignments;