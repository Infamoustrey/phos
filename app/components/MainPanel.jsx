import React, { useGlobal } from "reactn";

import { Grid } from "@material-ui/core";

import EditModeToggle from "./EditModeToggle";
import SlidePreviewSizeSlider from "./SlidePreviewSizeSlider";
import SlideCardList from "./SlideCardList";
import PreviewSlide from "./PreviewSlide";

const MainPanel = props => {
  const [editMode] = useGlobal("interface.edit-mode");

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
            {!editMode && <SlideCardList />}
          </Grid>
          <Grid item xs={4}>
            <PreviewSlide />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainPanel;
