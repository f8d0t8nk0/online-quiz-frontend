import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 275,
        // width: "300",
        boxShadow: '0 0 10px 5px rgba(100, 100, 100, 0.3)',
        margin: "10px",
        '&:hover': {
            boxShadow: '0 0 10px 5px rgba(25, 25, 25, 0.4)',
        }
    },
    innerButton: {
        height: "100%",
        width: "100%",
    },
    quizName: {
        color: "#31a1ad"
    },
    studentName: {
        color: "#ad8154"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function AssignmentCard({ assignment, setSelectedAssignment, nextStep }) {

    const classes = useStyles();

    const handleClick = () => {
        setSelectedAssignment(assignment);
        nextStep();
    };

    return (
        <Card className={classes.root} >
            <Button className={classes.innerButton} onClick={handleClick}>
                <CardContent>
                    <Typography className={classes.quizName} variant="h5" component="h2">
                        {assignment.name}
                    </Typography>
                    <Typography component={'div'} className={classes.pos} color="textSecondary">
                        {assignment.quizFullDto.name}
                    </Typography>
                    {/*<Typography variant="body2" component="p">*/}
                    {/*    {assignment.description}*/}
                    {/*</Typography>*/}
                    <Typography component={'div'} className={classes.pos} color="textSecondary">
                        # {assignment.id}
                    </Typography>
                    <Typography className={classes.studentName} variant="h6" component="h3">
                        Student name
                    </Typography>
                </CardContent>
            </Button>
        </Card>
    );
}

export default AssignmentCard;