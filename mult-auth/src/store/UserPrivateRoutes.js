import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../layout/User/header";
import ProfileView from "../views/User/ProfileView";

export default function UserPrivateRoutes(props) {
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
