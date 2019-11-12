import React from "react";

import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ViewCompactIcon from "@material-ui/icons/ViewCompact";
import { Fab } from "@material-ui/core";

const EditModeToggle = props => {
  return (
    <div style={{ display: "flex", padding: "1rem" }}>
      <Fab size="small" color="secondary" style={{ marginRight: "0.5rem" }}>
        <ViewComfyIcon />
      </Fab>
      <Fab size="small">
        <ViewCompactIcon />
      </Fab>
    </div>
  );
};

export default EditModeToggle;
