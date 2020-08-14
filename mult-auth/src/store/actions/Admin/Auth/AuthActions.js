import {
  SignUpService,
  LoginAdmin,
  LogOutAdmin,
} from "../../../../services/Admin/AuthService";

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

export const AdminLoginAction = (credentials, props) => {
  return (dispatch) => {
    dispatch({ type: "RESTART_AUTH_RESPONSE" });
    dispatch({ type: "LOADING" });

    LoginAdmin(credentials).then(
      (res) => {
        if (res.hasOwnProperty("success") && res.success == true) {
          dispatch({ type: "LOGIN_SUCCESS", res });

          localStorage.setItem("admin-token", res.token);
          setTimeout(() => {
            props.history.push("/admin");
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

export const AdminLogoutAction = () => {
  return (dispatch) => {
    dispatch({ type: "RESTART_AUTH_RESPONSE" });

    LogOutAdmin().then(
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
