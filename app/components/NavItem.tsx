import React, { useState, useRef } from "reactn";

import { useGlobal } from "../store";

import {
  Button,
  Menu,
  ListItem,
  ListItemText,
  Icon,
  useTheme
} from "@material-ui/core";

const NavSubItem = ({ item, onActivate }) => {
  const { label, icon, component } = item;

  const theme = useTheme();

  const [userInterface, setUserInterface] = useGlobal("userInterface");

  return (
    <React.Fragment>
      <ListItem
        onClick={() => {
          setUserInterface({ ...userInterface, modalComponent: component });
          onActivate();
        }}
        button
      >
        {icon && <Icon style={{ marginRight: theme.spacing(2) }}>{icon}</Icon>}
        <ListItemText primary={label} />
      </ListItem>
    </React.Fragment>
  );
};

const NavItem = props => {
  const { label, items = [] } = props;

  const [open, setOpen] = useState(false);

  const buttonRef = useRef(null);

  return (
    <React.Fragment>
      <Button
        ref={buttonRef}
        onClick={() => setOpen(true)}
        variant="text"
        color="inherit"
      >
        {label}
      </Button>
      <Menu
        anchorEl={buttonRef.current}
        open={open}
        onClose={() => setOpen(false)}
        transitionDuration={100}
      >
        {items.map((item, i) => (
          <NavSubItem key={i} item={item} onActivate={() => setOpen(false)} />
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default NavItem;
