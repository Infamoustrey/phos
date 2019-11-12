import React, { useState } from "react";

import { AppBar, Toolbar, FormControlLabel, Switch } from "@material-ui/core";

import NavItem from "./NavItem";
import NewPresentationModal from "./NewPresentationModal";

const Navbar = props => {
  const [presentMode, setPresentMode] = useState(false);

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <NavItem label="File">
          <NewPresentationModal />
        </NavItem>
        <div style={{ flex: 1 }}></div>
        <FormControlLabel
          control={
            <Switch
              checked={presentMode}
              onChange={() => setPresentMode(!presentMode)}
              value="checkedA"
            />
          }
          label="Present Mode"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
