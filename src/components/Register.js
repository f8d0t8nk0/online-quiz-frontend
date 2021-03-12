import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchRoles, login, registerNewUser} from "../redux/api/apiActions";
import CircularProgress from "@material-ui/core/CircularProgress";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    hideProgress: {
        display: "none"
    },
    showProgress: {
        display: "flex",
        flexDirection: "row",
        margin: "10px",
        marginBottom: "150px"
    },
}));


function Register(props) {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const [progressClass, setProgressClass] = useState(classes.hideProgress);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [roleId, setRoleId] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [buttonName, setButtonName] = useState("Select Role");
    const roles = useSelector(state => state.api.getRoles.roles);

    useEffect(() => {
        dispatch(fetchRoles())
    }, [dispatch]);

    const handleSubmit = () => {
        console.log("handleSubmit")
        let registerDto = {
            name: "",
            password: "",
            email: "",
            roleId: ""
        };

        registerDto.name = name;
        registerDto.password = password;
        registerDto.email = email;
        registerDto.roleId = roleId;

        dispatch(registerNewUser(registerDto));
        setProgressClass(classes.showProgress);
        setTimeout(() => {
            dispatch(login({
                email : email,
                password : password
            }));
            history.push("/");
        }, 1500)

    };


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PersonAddOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <div className={classes.form} >
                    <TextField
                        onChange={event => setName(event.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        onChange={event => setEmail(event.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    <TextField
                        onChange={event => setPassword(event.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        fullWidth
                        onClick={handleClick}
                    >
                        {buttonName}
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {roles.map(role => {
                            return (<MenuItem
                                        onClick={() => {
                                            handleClose();
                                            setButtonName(role.name);
                                            setRoleId(role.id)
                                        }}>{role.name}
                                    </MenuItem>)
                        })}
                    </Menu>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Register
                    </Button>

                </div>
            </div>
            <CircularProgress
                disableShrink
                className={progressClass}
            />
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default Register;