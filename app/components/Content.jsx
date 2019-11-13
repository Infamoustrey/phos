import React from "react";

import { connect } from "react-redux";

import { Grid } from "@material-ui/core";

import PresentationItems from "./PresentationItems";
import EditPanel from "./EditPanel";
import NoPresentationLoaded from "./NoPresentationLoaded";

const Content = ({ presentation }) => {
  return !presentation._id ? (
    <NoPresentationLoaded />
  ) : (
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

const mapStateToProps = state => ({ presentation: state.Presentation });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
