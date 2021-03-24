import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import GroupTable from "./GroupTable";

const useStyles = makeStyles({
    root: {
        display : "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
});

function GroupTables({ groups }) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                groups.map(group => {
                    return (
                        <GroupTable
                            key={group.id}
                            group={group}/>
                    )
                })
            }
        </div>
    );
}

export default GroupTables;