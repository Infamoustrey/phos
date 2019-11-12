import React, { useState } from "react";

import { Button, Menu, ListItem, ListItemText, Icon } from "@material-ui/core";

const NavSubItem = ({ item, onAction }) => {
  const { label, icon, component } = item;

  const [active, setActive] = useState(false);

  return (
    <ListItem button>
      <ListItemText primary={label} onClick={() => setActive(!active)} />
      {icon && (
        <Icon onClick={() => setActive(!active)} style={{ marginLeft: "2rem" }}>
          {icon}
        </Icon>
      )}
      {component &&
        React.createElement(
          component,
          { active, setActive, onAction: () => onAction() },
          null
        )}
    </ListItem>
  );
};

const NavItem = props => {
  const { label, items = [] } = props;

  const [open, setOpen] = useState(false);

  const id = Math.round(new Date().getTime() / 1000);

  const action = () => {
    setOpen(false);
  };

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
        {items.map((item, i) => (
          <NavSubItem key={i} item={item} onAction={action} />
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default NavItem;
