import React from "react";
import { Grid } from "@material-ui/core";
import PresentationItems from "./PresentationItems";
import EditPanel from "./EditPanel";

const Content = props => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <PresentationItems />
      </Grid>
      <Grid item xs={10}>
        <EditPanel />
      </Grid>
    </Grid>
  );
};

export default Content;
