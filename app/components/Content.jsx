import React from "react";
import { Grid } from "@material-ui/core";
import PresentationItems from "./PresentationItems";
import EditPanel from "./EditPanel";

const Content = props => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <PresentationItems />
      </Grid>
      <Grid item xs={9}>
        <EditPanel />
      </Grid>
    </Grid>
  );
};

export default Content;
