import { combineReducers } from "redux";
import UserAuthReducer from "../reducers/User/Auth/UserAuthReducer";
import AdminAuthReducer from "./Admin/Auth/AdminAuthReducer";
import UserProfileReducer from "./User/UserProfileReducer";
import AdminProfileReducer from "./Admin/AdminProfileReducer";

const RootReducer = combineReducers({
  userAuth: UserAuthReducer,
  adminAuth: AdminAuthReducer,
  userProfile: UserProfileReducer,
  adminProfile: AdminProfileReducer,
});

export default RootReducer;
