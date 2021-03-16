import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import AssignmentCard from "./AssignmentCard";
import {useDispatch, useSelector} from "react-redux";


const useStyles = makeStyles({
    root: {
        display : "flex",
        // flexFlow: "row wrap",
        // flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
    },
    headerText: {
        textAlign: "center"
    }
});

function AssignmentCards({ setAssignments, setSelectedAssignment, nextStep, url }) {
    const classes = useStyles();

    const assignments = useSelector(state => {
        return state.api.getTeachAssign.assignments;
    });

    setAssignments(assignments);

    return (
        <div>
            <div>
                <h1 className={classes.headerText}>My Assignments</h1>
                <div className={classes.root}>
                    {assignments.map((assignment, index) => {
                        return (
                            <AssignmentCard
                                key={assignment.id}
                                assignment={assignment}
                                setSelectedAssignment={setSelectedAssignment}
                                nextStep={nextStep}
                                url={url}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default AssignmentCards;