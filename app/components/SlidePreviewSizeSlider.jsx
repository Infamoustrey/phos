import React from "react";
import { Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const CustomSlider = withStyles({
  root: {
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    marginTop: -8,
    marginLeft: -12,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  track: {
    height: 8,
    borderRadius: 4
  },
  mark: { opacity: 0 },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

const SlidePreviewSizeSlider = props => {
  return (
    <div style={{ height: "100%", display: "flex", width: "100%" }}>
      <div style={{ marginTop: "auto", marginBottom: "auto", width: "100%" }}>
        <CustomSlider
          defaultValue={50}
          valueLabelDisplay="off"
          step={25}
          marks
          min={0}
          max={100}
        />
      </div>
    </div>
  );
};

export default SlidePreviewSizeSlider;
