import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, Route, useRouteMatch} from "react-router-dom";
import {fetchArchivedQuizzes, fetchQuizzes} from "../redux/api/apiActions";
import ArchiveQuizCards from "../components/archive/ArchiveQuizCards";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    category: {
        minWidth: 275,
        maxWidth: 275,
        // width: "300",
        boxShadow: '0 0 10px 5px rgba(100, 100, 100, 0.3)',
        margin: "10px",
        '&:hover': {
            boxShadow: '0 0 10px 5px rgba(25, 25, 25, 0.4)',
        },
        backgroundColor: "#ebebd2",
        textDecoration: 'none',
    },
    link: {
        textDecoration: 'none',
    },
    quizName: {
        color: "#5cad73",
        textAlign: "center"
    },

});

function Archive(props) {

    const classes = useStyles();

    const dispatch = useDispatch();
    const quizzes = useSelector(state => {
        if (state.api.getArchivedQuizzes !== undefined) {
            return state.api.getArchivedQuizzes.quizzes
        }
    });

    const {url} = useRouteMatch();

    const [value, setValue] = useState(0);
    const forceUpdate = () => {
        setValue(value + 1);
    }

    useEffect(() => {
        dispatch(fetchArchivedQuizzes());
        console.log(value);
    }, [value]);

    return (
        <div>
            <Route>
                <Link className={classes.link} to={'/archive/quizzes'}  >
                    <Card className={classes.category}>
                        <CardContent>
                            <Typography className={classes.quizName} variant="h5" component="h2">
                                Quizzes
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            </Route>
            <Route exact path='/archive/quizzes'>
                <ArchiveQuizCards
                    quizzes={quizzes}
                    url={url}
                    forceUpdate={forceUpdate}
                />
            </Route>
        </div>
    );
}

export default Archive;