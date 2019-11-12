import React, { Component } from "react";

import { AppBar, Toolbar } from "@material-ui/core";

import { NavItem } from "./NavItem";
import NewPresentationModal from "./NewPresentationModal";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar variant="dense">
          <NavItem label="File">
            <NewPresentationModal />
          </NavItem>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
