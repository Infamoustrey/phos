import React from "react";
import { Grid } from "@material-ui/core";
import PresentationItems from "./PresentationItems";

const Content = props => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <PresentationItems />
      </Grid>
      <Grid item xs={9}>
        Content
      </Grid>
    </Grid>
  );
};

export default Content;
