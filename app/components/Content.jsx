import React, { useGlobal } from "reactn";

import { Grid } from "@material-ui/core";

import PresentationItems from "./PresentationItems";
import MainPanel from "./MainPanel";
import NoPresentationLoaded from "./NoPresentationLoaded";

const Content = () => {
  const [presentation] = useGlobal("presentation");

  return !presentation ? (
    <NoPresentationLoaded />
  ) : (
    <Grid container>
      <Grid item xs={2}>
        <PresentationItems />
      </Grid>
      <Grid item xs={10}>
        <MainPanel />
      </Grid>
    </Grid>
  );
};

export default Content;
