import React from "react";

import { AppBar, Toolbar, Grid } from "@material-ui/core";
import { NavItem } from "./nav-item";

import { NavigationItems } from "./navigation-items";
import { SystemBar } from "../SystemBar";

export const Navbar = () => {
  return (
    // @ts-ignore
    <AppBar position="relative" style={{ "-webkit-app-region": "drag" }}>
      <Toolbar variant="dense">
        <Grid container justify="space-between">
          <Grid item>
            {NavigationItems.map((item) => (
              <NavItem key={item.text} item={item} />
            ))}
          </Grid>
          <Grid item>
            <SystemBar />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
