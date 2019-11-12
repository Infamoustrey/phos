import React, { useState } from "react";

import { Button, Menu } from "@material-ui/core";

const NavItem = props => {
  const { label, children } = props;

  const [open, setOpen] = useState(false);

  const id = Math.round(new Date().getTime() / 1000);

  return (
    <React.Fragment>
      <Button id={id} color="inherit" onClick={() => setOpen(true)}>
        {label}
      </Button>
      <Menu
        anchorEl={document.getElementById(id)}
        transitionDuration={100}
        open={open}
        onClose={() => setOpen(false)}
      >
        {children}
      </Menu>
    </React.Fragment>
  );
};

export default NavItem;
