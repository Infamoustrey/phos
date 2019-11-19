import React, { useState } from "reactn";
import {
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent
} from "@material-ui/core";

const Preferences = props => {
  const { onComplete } = props;

  const [open, setOpen] = useState(true);
  const [page, setPage] = useState(0);

  const cancel = onComplete;

  return (
    <Dialog open={open} maxWidth="md" fullWidth onClose={cancel}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <Tabs
              value={page}
              onChange={(e, val) => setPage(val)}
              //   textColor="secondary"
              indicatorColor="secondary"
              orientation="vertical"
              variant="standard"
            >
              <Tab label="General" />
              <Tab label="Display" />
              <Tab label="Audio" />
              <Tab label="Sync" />
            </Tabs>
          </div>
          <div style={{ flexGrow: 1 }}></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Preferences;
