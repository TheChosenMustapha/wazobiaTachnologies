import React, {useState} from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectUser } from "../features/Userslice";
import { CardContent } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../features/Userslice";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    justifyContent: "center",
    backgroundColor: "white"
   
  },
  image: {
     
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    backgroundPosition: "center",
    marginTop: 100

    
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    elevation: 6
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignInSide = () => {
  const classes = useStyles();
  //  const user = useSelector(selectUser); name of the logged in user
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
        login({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            loggedIn: true,
        })
    )
  return (


    <Grid container component="main" className={classes.root}  elevation= {6} >
      <Grid item xs={10} sm={8} md={5}  elevation = {6} >
        <div className={classes.paper}>

          <Typography component="h1" variant="h5">
            {/* {user.name} */}
            Create Account
          </Typography>
          <Grid container justify= "center">
            <Grid item>
              <Link href="/signin" variant="body2" >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          <form className={classes.form} noValidate>
          <div>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="First Name"
              label="First Name"
              name="First Name"
              autoComplete="First Name"
              autoFocus
              value={firstName}
              onChange= { (e) => setfirstName(e.target.value)}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Last Name "
              label="Last Name"
              name="Last Name"
              autoComplete="Last Name"
              autoFocus
              value={lastName}
              onChange= { (e) => lastName(e.target.value)}
            />
            </div>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange= { (e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange= { (e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
           
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
}
export default SignInSide;
