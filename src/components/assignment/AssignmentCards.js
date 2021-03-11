import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import AssignmentCard from "./AssignmentCard";

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

function AssignmentCards({ assignments, setSelectedAssignment, nextStep }) {
    const classes = useStyles();

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
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default AssignmentCards;