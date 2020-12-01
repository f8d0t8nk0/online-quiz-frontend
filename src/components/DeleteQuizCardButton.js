import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
    deleteButton: {
        alignSelf: "right",
        marginLeft: "auto",
        backgroundColor: "#cd3a27",
        font: 12,
        color: "white",
        '&:hover': {
            boxShadow: '0 0 10px 5px rgba(25, 25, 25, 0.3)',
            backgroundColor: "#941f0e",
        }
    }
})



function DeleteQuizCardButton({ rootClass, setRootClass }) {
    const classes = useStyles();

    return (
        <div>
            <Button className={classes.deleteButton}  />
        </div>
    );
}

export default DeleteQuizCardButton;