import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../layout/Admin/header";
import ProfileView from "../views/Admin/ProfileView";

export default function AdminPrivateRoutes(props) {
  return (
    <div>
      <Header props={props} />
      <Switch>
        <Route
          exact
          path={`${props.match.path}/view-profile`}
          component={ProfileView}
        />
        <Route
          exact
          path={props.match.path}
          render={(props) => (
            <Redirect to={{ pathname: `${props.match.path}/view-profile` }} />
          )}
        />
      </Switch>
    </div>
  );
}
