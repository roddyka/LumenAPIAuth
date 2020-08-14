import {
  SignUpService,
  LoginUser,
  LogOutUser,
} from "../../../../services/User/AuthService";

export const signUpAction = (credentials) => {
  return (dispatch) => {
    dispatch({ type: "RESTART_AUTH_RESPONSE" });
    dispatch({ type: "LOADING" });

    SignUpService(credentials).then(
      (res) => {
        if (res.hasOwnProperty("success") && res.success == true) {
          dispatch({ type: "SIGNUP_SUCCESS", res });
        } else if (res.hasOwnProperty("success") && res.success == false) {
          dispatch({ type: "SIGNUP_ERROR", res });
        }
      },
      (error) => {
        dispatch({ type: "CODE_ERROR", error });
      }
    );
  };
};

export const UserLoginAction = (credentials, props) => {
  return (dispatch) => {
    dispatch({ type: "RESTART_AUTH_RESPONSE" });
    dispatch({ type: "LOADING" });

    LoginUser(credentials).then(
      (res) => {
        if (res.hasOwnProperty("success") && res.success == true) {
          dispatch({ type: "LOGIN_SUCCESS", res });

          localStorage.setItem("user-token", res.token);
          setTimeout(() => {
            props.history.push("/user");
          }, 1500);
        } else if (res.hasOwnProperty("success") && res.success == false) {
          dispatch({ type: "LOGIN_ERROR", res });
        }
      },
      (error) => {
        dispatch({ type: "CODE_ERROR", error });
      }
    );
  };
};

export const UserLogoutAction = () => {
  return (dispatch) => {
    dispatch({ type: "RESTART_AUTH_RESPONSE" });

    LogOutUser().then(
      (res) => {
        if (res.hasOwnProperty("success") && res.success == true) {
          dispatch({ type: "LOGOUT_SUCCESS", res });
        } else if (res.hasOwnProperty("success") && res.success == false) {
          dispatch({ type: "LOGOUT_ERROR", res });
        }
      },
      (error) => {
        dispatch({ type: "CODE_ERROR", error });
      }
    );
  };
};
