import React from 'react';
import Typography from "@material-ui/core/Typography";
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from "@material-ui/core/styles";
import GroupTable from "../components/group/GroupTable";
import {GroupListData} from "../components/mockData/GroupListData";
import GroupTables from "../components/group/GroupTables";
import MyGridContainer from "../components/MyGridContainer";

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

function Account(props) {
    const classes = useStyles();

    return (
        <div>
            <Typography component={'div'} paragraph>
                <h1>Account page</h1>
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

                <p>

                    <br/>
                    1. Red Square is in ...

                    <br/>
                    a) Paris
                    <br/>
                    b) Moscow
                    <br/>
                    c) Roma
                    <br/>
                    d) Berlin
                    <br/>
                    <br/>

                    2. Berlin is a capital of ...

                    <br/>
                    <br/>
                    a) Russia
                    <br/>
                    b) France
                    <br/>
                    c) Italy
                    <br/>
                    d) Germany
                    <br/>

                    <br/>
                    <br/>
                    3. The longest river in the world.

                    <br/>
                    <br/>
                    a) Thames
                    <br/>
                    b) Amazon
                    <br/>
                    c) Nile
                    <br/>
                    d) Mississipi
                    <br/>

                    <br/>
                    <br/>
                    4. The smallest continent in the world.

                    <br/>
                    a) Africa
                    <br/>
                    b) Asia
                    <br/>
                    c) North America
                    <br/>
                    d) Australia
                    <br/>

                    <br/>
                    <br/>
                    5. The highest lake is the world.

                    <br/>
                    a) Titicaca
                    <br/>
                    b) Victoria
                    <br/>
                    c) Baikal
                    <br/>
                    d) Dead Sea
                    <br/>


                    <br/>
                    <br/>
                    1-b 2-d 3-c 4-d 5-a


                </p>

                <MyGridContainer>
                    <GroupTables groups={GroupListData}/>
                </MyGridContainer>
            </Typography>

        </div>
    );
}

export default Account;