import React from "react";
import { Grid } from "@material-ui/core";
import EditModeToggle from "./EditModeToggle";
import SlidePreviewSizeSlider from "./SlidePreviewSizeSlider";
import SlideCardList from "./SlideCardList";

const EditPanel = props => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={2}>
            <EditModeToggle />
          </Grid>
          <Grid item xs={2}>
            <SlidePreviewSizeSlider />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={8}>
            <SlideCardList />
          </Grid>
          <Grid item xs={4}>
            {" "}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditPanel;
