import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "../../styles";

export default function HomeView(props) {
  const goToDashboard = (e, url) => {
    props.props.history.push(url);
  };

  const classes = useStyles();

  return (
    <div className={classes.homeRoot}>
      <div className={classes.containerDiv}>
        <Button
          className={classes.extraBtnStyle}
          onClick={(e) => goToDashboard(e, "/user")}
          variant="contained"
          size="large"
          color="primary"
        >
          User
        </Button>
        <Button
          className={classes.extraBtnStyle}
          onClick={(e) => goToDashboard(e, "/admin")}
          variant="contained"
          size="large"
          color="secondary"
        >
          Admin
        </Button>
      </div>
    </div>
  );
}
