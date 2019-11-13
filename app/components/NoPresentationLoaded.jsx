import React from "react";
import { Typography } from "@material-ui/core";

const NoPresentationLoaded = props => {
  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <div
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          textAlign: "center",
          width: "100%"
        }}
      >
        <Typography variant="h3" style={{ color: "rgba(0,0,0,0.2)" }}>
          No Presentation Selected
        </Typography>
      </div>
    </div>
  );
};

export default NoPresentationLoaded;
