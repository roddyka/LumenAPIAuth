import React, { useEffect } from "react";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useStyles } from "../../../styles";
import { Card, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useFormFields } from "../../../helpers/hooksFormInput";

import { useDispatch, useSelector } from "react-redux";
import { displayErrorMessages } from "../../../helpers/displayErr";

import { AdminLoginAction } from "../../../store/actions/Admin/Auth/AuthActions";

export default function LoginView(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const authResponse = useSelector(
    (state) => state.adminAuth.adminAuthResponse
  );
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });

  const AdminLogin = (e) => {
    e.preventDefault();
    console.log(fields);

    clearAuthDiv();

    dispatch(AdminLoginAction(fields, props.props));
  };

  const clearAuthDiv = () => {
    let authErr = document.querySelector("#authErr");
    authErr.innerHTML = "";
  };

  const successMessage = (successMessage) => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<div class='alert alert-success add-padding'>" +
            successMessage +
            "</div>",
        }}
      ></div>
    );
  };
  return (
    <div>
      <div className={classes.centerItem}>
        <Card>
          <h2>
            <b>Welcome to Admin Login</b>
          </h2>
          <div id="authErr"></div>
          <div id="authResponse">
            {
              /**
               * if authResponse.success is true show success message
               */
              authResponse != "" && authResponse.success == true
                ? successMessage(authResponse.message)
                : /**
                 * else if authResponse.success == false show error messages
                 */
                authResponse == undefined || authResponse.success == false
                ? displayErrorMessages(
                    authResponse.error,
                    document.getElementById("authErr")
                  )
                : authResponse
            }
          </div>
          <form onSubmit={AdminLogin}>
            <div>
              <TextField
                type="email"
                className={classes.fullWidth}
                required
                margin="normal"
                variant="outlined"
                label="email"
                id="email"
                value={fields.email}
                onChange={handleFieldChange}
              />
            </div>
            <div>
              <TextField
                type="password"
                className={classes.fullWidth}
                required
                margin="normal"
                variant="outlined"
                label="password"
                id="password"
                value={fields.password}
                onChange={handleFieldChange}
              />
            </div>

            <div>
              <Button
                type="submit"
                className={classes.fullWidth}
                color="primary"
                variant="contained"
                endIcon={<AccountCircleIcon />}
              >
                <p>Login</p>
              </Button>

              <div className={classes.linkContainer}>
                <Link to="/admin/register">Register Here</Link>
              </div>

              <div className={classes.linkContainer}>
                <Link to="/home">Back To Home</Link>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
