import React, { useState, useRef } from "react";

import { Button, Menu, ListItem, ListItemText, Icon } from "@material-ui/core";

const NavSubItem = ({ item, onAction }) => {
  const { label, icon, component } = item;

  const [active, setActive] = useState(false);

  return (
    <React.Fragment>
      <ListItem onClick={() => setActive(!active)} button>
        <ListItemText primary={label} />
        {icon && <Icon style={{ marginLeft: "2rem" }}>{icon}</Icon>}
      </ListItem>
      {component &&
        React.createElement(
          component,
          { active, setActive, onAction: () => onAction() },
          null
        )}
    </React.Fragment>
  );
};

const NavItem = props => {
  const { label, items = [] } = props;

  const [open, setOpen] = useState(false);

  const buttonRef = useRef(null);

  const action = () => {
    setOpen(false);
  };

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
          <NavSubItem key={i} item={item} onAction={action} />
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default NavItem;
