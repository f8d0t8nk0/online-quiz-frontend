import React, {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CustomRadio from "./CustomRadio";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
    root: {
        minWidth: 550,
        maxWidth: 550,
        display : "flex",
        flexDirection: "column",
        boxShadow: '0 0 10px 5px rgba(100, 100, 100, 0.3)',
        margin: "10px",
        '&:hover': {
            boxShadow: '0 0 10px 5px rgba(25, 25, 25, 0.4)',
        }
    },
    hideCard: {
        display: "none"
    },
    fadeOutCard : {
        boxShadow: '0 0 10px 5px rgba(100, 100, 100, 0.3)',
        margin: "10px",
        transition: "opacity " + 500/1000 + "s ease-out",
        opacity: "0"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    rightAnsClass: {
        color: "green"
    },
    deleteButton: {
        alignSelf: "right",
        marginLeft: "auto",
        backgroundColor: "#cd3a27",
        color: "white",
        '&:hover': {
            boxShadow: '0 0 10px 5px rgba(25, 25, 25, 0.3)',
            backgroundColor: "#941f0e",
        }
    }
});

function CoreQuestionCard({question, ordinal}) {

    const classes = useStyles();
    const [rootClass, setRootClass] = useState(classes.root);
    const [selection, setSelection] = useState('');

    const handleChange = (event) => {
        setSelection(event.target.value)
    };

    return (
        <div>
            <Card className={rootClass}>
                <CardContent>
                    <Typography component={'div'}  className={classes.title} color="textSecondary" gutterBottom>
                        {ordinal}
                    </Typography>
                    <Typography component={'div'}  >
                        {question.question}
                    </Typography>
                    <br />
                    <FormControl component="fieldset">
                        {/*<FormLabel component="legend">Gender</FormLabel>*/}
                        <RadioGroup aria-label="gender" name="gender1" value={selection} onChange={handleChange}>
                            <FormControlLabel value="a" control={<CustomRadio />} label={"A)" + question.a} />
                            <FormControlLabel value="b" control={<CustomRadio />} label={"B)" + question.b} />
                            <FormControlLabel value="c" control={<CustomRadio />} label={"C)" + question.c} />
                            <FormControlLabel value="d" control={<CustomRadio />} label={"D)" + question.d} />
                        </RadioGroup>
                    </FormControl>
                </CardContent>
            </Card>

        </div>



    );
}

export default CoreQuestionCard;