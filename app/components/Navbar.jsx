import React, { useState } from "react";

import { AppBar, Toolbar, FormControlLabel, Switch } from "@material-ui/core";

import NavItem from "./NavItem";
import NewPresentationForm from "./NewPresentationForm";

const Navbar = props => {
  const [presentMode, setPresentMode] = useState(false);

  const navItems = [
    {
      label: "File",
      items: [{ label: "New", component: NewPresentationForm }]
    }
  ];

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        {navItems.map((item, i) => (
          <NavItem key={i} label={item.label} items={item.items} />
        ))}
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
