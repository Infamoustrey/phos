import React from "reactn";

import { useGlobal } from "../store";

import { Fab } from "@material-ui/core";

import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ViewCompactIcon from "@material-ui/icons/ViewCompact";
import EditIcon from "@material-ui/icons/Edit";
import PlayIcon from "@material-ui/icons/PlayArrow";

const EditModeToggle = props => {
  const [userInterface, setUserInterface] = useGlobal("userInterface");

  return (
    <div style={{ display: "flex", padding: "1rem" }}>
      <Fab
        size="small"
        color="secondary"
        style={{ marginRight: "0.5rem" }}
        onClick={() =>
          setUserInterface({
            ...userInterface,
            editMode: !userInterface.editMode
          })
        }
      >
        {userInterface.editMode ? <PlayIcon /> : <EditIcon />}
      </Fab>
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