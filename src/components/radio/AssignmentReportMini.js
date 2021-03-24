import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import {fetchAssignmentReport} from "../../redux/api/apiActions";
import { useHistory, useParams, useRouteMatch, Redirect } from "react-router-dom";
import {myHoverShadow, myShadow} from "../../redux/globalStyleConst";


const useStyles = makeStyles({
    root: {
        // minWidth: 400,
        // maxWidth: 400,
        // width: "300",
        boxShadow: myShadow,
        margin: "10px",
        '&:hover': {
            boxShadow: myHoverShadow,
        }
    },
    innerButton: {
        height: "100%",
        width: "100%",
    },
    quizName: {
        color: "#31a1ad"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function AssignmentReportMini() {

    const dispatch = useDispatch();
    const report = useSelector(state => state.api.checkAssignment.report);

    const history = useHistory();
    const { url } = useRouteMatch();


    const classes = useStyles();
    const handleClick = () => {
        dispatch(fetchAssignmentReport(report.id))
            .then(history.push(`${url}/full`));
        console.log("Clicked!!!");
        // setTimeout(nextStep(), 1500);
    };

    return (
        <Card className={classes.root} >
            <Button className={classes.innerButton} onClick={handleClick}>
                <CardContent>
                    <Typography component={'div'} className={classes.pos} color="textSecondary">
                        # {report.assignmentId}
                    </Typography>
                    <Typography className={classes.quizName} variant="h5" component="h2">
                        {report.name}
                    </Typography>
                    <Typography component={'div'} className={classes.pos} color="textSecondary">
                        Your score {Math.ceil((report.correctAnswers * 100) / report.totalAnswers)} %
                    </Typography>
                </CardContent>
            </Button>
        </Card>
    );
}

export default AssignmentReportMini;