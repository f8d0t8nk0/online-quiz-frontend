import React from 'react';
import Typography from "@material-ui/core/Typography";
import {QuestionsData} from "../components/mockData/QuestionsData";
import CoreQuestions from "../components/radio/CoreQuestions";
import {useRouteMatch } from "react-router-dom";

function Settings(props) {

    console.log(useRouteMatch()); // todo dl
    return (
        <div>
            <Typography component={'div'} paragraph>
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

            <CoreQuestions questions={QuestionsData} />

        </div>
    );
}

export default Settings;