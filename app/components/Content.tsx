import React from "reactn";

import { useGlobal } from "../store";

import { Grid } from "@material-ui/core";

import PresentationItems from "./PresentationItems";
import MainPanel from "./MainPanel";
import NoPresentationLoaded from "./NoPresentationLoaded";

const Content = () => {
  const [presentation] = useGlobal("presentation");

  return !presentation ? (
    <NoPresentationLoaded />
  ) : (
    <Grid container className="full-height">
      <Grid item xs={2} className="full-height">
        <PresentationItems />
      </Grid>
      <Grid item xs={10} className="full-height">
        <MainPanel />
      </Grid>
    </Grid>
  );
};

export default Content;
