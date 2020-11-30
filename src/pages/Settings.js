import React from 'react';
import Typography from "@material-ui/core/Typography";
import {QuizzesData} from "../components/QuizzesData";
import QuizCard from "../components/QuizCard";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display : "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    }
});

function Settings(props) {
    const classes = useStyles();

    return (
        <div>
            <Typography paragraph>
                <h1>Settings page</h1>
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
            </Typography>
            <div className={classes.root}>
                {QuizzesData.map((quiz, index) => {
                    return (
                        <QuizCard quiz={quiz} ordinal={index + 1} />
                    )
                })}
            </div>
        </div>
    );
}

export default Settings;