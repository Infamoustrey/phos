import React from "reactn";
import { Typography } from "@material-ui/core";

const NoSelectedItem = props => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div
        style={{
          width: "100%",
          marginTop: "30%",
          marginBottom: "auto"
        }}
      >
        <Typography
          variant="h3"
          style={{
            color: "rgba(0,0,0,0.2)",
            textAlign: "center"
          }}
        >
          No Item Selected
        </Typography>
      </div>
    </div>
  );
};

export default NoSelectedItem;
