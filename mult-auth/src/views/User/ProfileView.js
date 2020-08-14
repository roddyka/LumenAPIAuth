import React, { useEffect } from "react";
import { Card } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import { useStyles } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { loadUserProfileAction } from "../../store/actions/User/ProfileActions";

export default function ProfileView() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile.userProfile);

  useEffect(() => {
    dispatch(loadUserProfileAction());
  }, [dispatch]);

  return (
    <div className={classes.fullWidthProfile}>
      <Card>
        {userProfile != "" && userProfile.success == true ? (
          <div>
            <h3>
              <b>Name: </b>
              {userProfile.data.name}
            </h3>
            <h3>
              <b>Email: </b>
              {userProfile.data.email}
            </h3>
            <h3>
              <b>Account Creation Date: </b>
              {userProfile.data.created_at}
            </h3>
          </div>
        ) : userProfile.success == false ? (
          userProfile.message
        ) : (
          <Skeleton variant="rect" width={210} height={118} />
        )}
      </Card>
    </div>
  );
}
