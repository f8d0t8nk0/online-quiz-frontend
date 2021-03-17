import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, Route, useRouteMatch} from "react-router-dom";
import {fetchArchivedQuizzes} from "../redux/api/apiActions";
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

    useEffect(() => {
        dispatch(fetchArchivedQuizzes())
    }, []);

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
                />
            </Route>
        </div>
    );
}

export default Archive;