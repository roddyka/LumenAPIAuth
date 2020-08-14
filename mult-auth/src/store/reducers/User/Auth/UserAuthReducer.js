const initialState = {
  userAuthResponse: "",
};

const UserAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESTART_AUTH_RESPONSE":
      return {
        ...state,
        userAuthResponse: "",
      };

    case "LOADING":
      return {
        ...state,
        userAuthResponse: "loading...",
      };

    case "SIGNUP_SUCCESS":
      return {
        ...state,
        userAuthResponse: action.res,
      };

    case "SIGNUP_ERROR":
      return {
        ...state,
        userAuthResponse: action.res,
      };

    case "CODE_ERROR":
      return {
        ...state,
        userAuthResponse:
          "there seems to be a problem please refresh your browser",
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        userAuthResponse: "redirecting to dashboard...",
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        userAuthResponse: action.res,
      };

    case "LOGOUT_SUCCESS":
      return {
        ...state,
        userAuthResponse: action.res,
      };

    case "LOGOUT_ERROR":
      return {
        ...state,
        userAuthResponse: action.res,
      };

    default:
      return state;
  }
};

export default UserAuthReducer;
