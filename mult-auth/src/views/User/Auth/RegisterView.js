import React from "react";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useStyles } from "../../../styles";
import { Card, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useFormFields } from "../../../helpers/hooksFormInput";

import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../../store/actions/User/Auth/AuthActions";
import { displayErrorMessages } from "../../../helpers/displayErr";

export default function RegisterView() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const authResponse = useSelector((state) => state.userAuth.userAuthResponse);
  console.log(authResponse);

  const [fields, handleFieldChange] = useFormFields({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const UserRegister = (e) => {
    e.preventDefault();

    console.log(fields);

    const passwordMatch = checkPasswordMatch(fields.password, fields.confirm);

    if (passwordMatch == true) {
      alert("password dont match");
      return;
    }

    dispatch(signUpAction(fields));
  };

  const checkPasswordMatch = (password, confirm) => {
    return password != confirm ? true : false;
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
            <b>Welcome to User Register</b>
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

          <form onSubmit={UserRegister}>
            <div>
              <TextField
                type="text"
                className={classes.fullWidth}
                required
                margin="normal"
                variant="outlined"
                label="name"
                id="name"
                value={fields.name}
                onChange={handleFieldChange}
              />
            </div>

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
              <TextField
                type="password"
                className={classes.fullWidth}
                required
                margin="normal"
                variant="outlined"
                label="confirm password"
                id="confirm"
                value={fields.confirm}
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
                <p>Register</p>
              </Button>

              <div className={classes.linkContainer}>
                <Link to="/user/login">Login Here</Link>
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
