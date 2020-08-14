const initialState = {
  adminProfile: "",
};

const AdminProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        adminProfile: "loading...",
      };

    case "LOAD_PROFILE_SUCCESS":
      return {
        ...state,
        adminProfile: action.res,
      };

    case "LOAD_PROFILE_ERROR":
      return {
        ...state,
        adminProfile: action.res,
      };

    case "CODE_ERROR":
      return {
        ...state,
        adminProfile: "there seems to be a problem please refresh your browser",
      };

    default:
      return state;
  }
};

export default AdminProfileReducer;
