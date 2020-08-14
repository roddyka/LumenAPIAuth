const initialState = {
  adminAuthResponse: "",
};

const AdminAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESTART_AUTH_RESPONSE":
      return {
        ...state,
        adminAuthResponse: "",
      };

    case "LOADING":
      return {
        ...state,
        adminAuthResponse: "loading...",
      };

    case "SIGNUP_SUCCESS":
      return {
        ...state,
        adminAuthResponse: action.res,
      };

    case "SIGNUP_ERROR":
      return {
        ...state,
        adminAuthResponse: action.res,
      };

    case "CODE_ERROR":
      return {
        ...state,
        adminAuthResponse:
          "there seems to be a problem please refresh your browser",
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        adminAuthResponse: "redirecting to dashboard...",
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        adminAuthResponse: action.res,
      };

    case "LOGOUT_SUCCESS":
      return {
        ...state,
        adminAuthResponse: action.res,
      };

    case "LOGOUT_ERROR":
      return {
        ...state,
        adminAuthResponse: action.res,
      };

    default:
      return state;
  }
};

export default AdminAuthReducer;
