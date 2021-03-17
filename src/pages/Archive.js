import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, Route, useRouteMatch} from "react-router-dom";
import {fetchArchivedQuizzes, fetchQuizzes} from "../redux/api/apiActions";
import ArchiveQuizCards from "../components/archive/ArchiveQuizCards";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function Archive(props) {

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
                <Link to={'/archive/quizzes'} >
                    <Card>
                        <CardContent>
                            Quizzes
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