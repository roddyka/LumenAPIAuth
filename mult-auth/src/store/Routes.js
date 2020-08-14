import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import UserLogin from "../pages/User/Auth/Login";
import AdminLogin from "../pages/Admin/Auth/Login";
import UserRegister from "../pages/User/Auth/Register";
import AdminRegister from "../pages/Admin/Auth/Register";
import { Guard } from "../Guard";
import AdminPrivateRoutes from "./AdminPrivateRoutes";
import UserPrivateRoutes from "./UserPrivateRoutes";

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <Redirect to={{ pathname: "/home" }} />}
      />
      <Route path="/home" component={Home} />
      <Route path="/user/login" component={UserLogin} />
      <Route path="/admin/login" component={AdminLogin} />

      <Route path="/user/register" component={UserRegister} />
      <Route path="/admin/register" component={AdminRegister} />

      <Guard
        path="/user"
        token="user-token"
        routeRedirect="/user/login"
        component={UserPrivateRoutes}
      />
      <Guard
        path="/admin"
        token="admin-token"
        routeRedirect="/admin/login"
        component={AdminPrivateRoutes}
      />
    </Switch>
  );
}
