import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import axios from "axios";

function Assignments(props) {

    const [assignments, setAssignments] = useState([])
    const [plainText, setPlainText] = useState("");


    const getUrl = () => {
        const host = `http://localhost:8080/`;
        // const host = 'https://online-quiz-webservice.herokuapp.com/';
        const allQuizzes = `api/v1/teacher/assignment/all`;
        return `${host}${allQuizzes}`;
    };

    const getAssignments = () => {
        // send to API
        const url = getUrl();

        axios.get(url)
            .then(res => {
                if (typeof res !== "undefined") {
                    setAssignments(res.data);
                    // console.log("Quizzes from server: " + quizzesFromServer);
                    // let data = res.data;
                    setPlainText(JSON.stringify(res.data));
                }
            })
    };

    useEffect(() => {
        getAssignments();
    }, []);

    return (
        <div>
            <Typography component={'div'} paragraph>
                <h1>Assignments</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                </p>


                {plainText}


            </Typography>
        </div>
    );
}

export default Assignments;