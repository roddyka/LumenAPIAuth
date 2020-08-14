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
import { AdminLogoutAction } from "../../store/actions/Admin/Auth/AuthActions";

export default function Header(props) {
  const dispatch = useDispatch();

  const authResponse = useSelector(
    (state) => state.adminAuth.adminAuthResponse
  );

  const logOut = () => {
    dispatch(AdminLogoutAction());
  };
  const classes = useStyles();

  useEffect(() => {
    if (authResponse !== "" && authResponse.success == true) {
      alert(authResponse.message);
      localStorage.removeItem("admin-token");
      props.props.history.push("/admin/login");
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
