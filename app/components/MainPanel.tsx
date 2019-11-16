import React from "reactn";

import { useGlobal } from "../store";

import { Grid } from "@material-ui/core";

import EditModeToggle from "./EditModeToggle";
import SlidePreviewSizeSlider from "./SlidePreviewSizeSlider";
import SlideCardList from "./SlideCardList";
import PreviewSlide from "./PreviewSlide";
import EditPane from "./EditPane";

const MainPanel = props => {
  const [userInterface] = useGlobal("userInterface");

  return (
    <Grid container className="full-height">
      <Grid
        item
        xs={12}
        className="full-height"
        style={{ flexDirection: "column" }}
      >
        <Grid container>
          <Grid item xs={2}>
            <EditModeToggle />
          </Grid>
          <Grid item xs={2}>
            <SlidePreviewSizeSlider />
          </Grid>
        </Grid>
        <Grid container className="full-height">
          <Grid item xs={8} style={{ height: "100%", overflowY: "auto" }}>
            {userInterface.editMode ? <EditPane /> : <SlideCardList />}
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
