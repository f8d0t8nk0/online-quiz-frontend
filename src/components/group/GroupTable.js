import React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {myHoverShadow, myShadow} from "../../redux/globalStyleConst";

const tableWidth = 400;

const useStyles = makeStyles({
    table: {
        margin: "10px",
        // minWidth: tableWidth,
        // maxWidth: tableWidth,
        boxShadow: '0 0 10px 5px rgba(100, 100, 100, 0.3)',
        '&:hover': {
            boxShadow: '0 0 10px 5px rgba(25, 25, 25, 0.4)',
        }
    },
    tableRow: {
        fontSize: 16
    },
    boxShadow: myShadow,
    '&:hover': {
        boxShadow: myHoverShadow,
    },
    title: {
        flex: '1 1 100%',
        textAlign: 'center',
        paddingTop: "5px",
        fontWeight: 600
    }
});

function GroupTable({ group }) {

    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={9} lg={6} xl={4}>
                <div className={classes.table}>
                    <div className={classes.title}>
                        <p>{group.name}</p>
                    </div>
                    <TableContainer component={Paper}>
                        <Table size="medium" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tableRow}>Name</TableCell>
                                    <TableCell className={classes.tableRow} align="left">Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {group.students.map(student => (
                                    <TableRow key={student.id}>
                                        <TableCell className={classes.tableRow} component="th" scope="student">
                                            {student.name}
                                        </TableCell>
                                        <TableCell className={classes.tableRow} align="left">{student.email}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Grid>
        </Grid>

    );
}

export default GroupTable;
