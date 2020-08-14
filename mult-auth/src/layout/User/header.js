import React, { useEffect } from "react";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { useStyles } from "../../styles";

import { useDispatch, useSelector } from "react-redux";
import { UserLogoutAction } from "../../store/actions/User/Auth/AuthActions";

export default function Header(props) {
  const dispatch = useDispatch();

  const authResponse = useSelector((state) => state.userAuth.userAuthResponse);

  const logOut = () => {
    dispatch(UserLogoutAction());
  };
  const classes = useStyles();

  useEffect(() => {
    if (authResponse !== "" && authResponse.success == true) {
      alert(authResponse.message);
      localStorage.removeItem("user-token");
      props.props.history.push("/user/login");
    }
    return () => {};
  }, [authResponse]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          {" "}
          <Typography variant="h6" noWrap className={classes.title}>
            Antunes Store
          </Typography>
          <Typography variant="h6" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <Button className="color" color="inherit" onClick={logOut}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
