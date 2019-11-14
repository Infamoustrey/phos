import React, { useState, useRef, useGlobal } from "reactn";

import { Button, Menu, ListItem, ListItemText, Icon } from "@material-ui/core";

const NavSubItem = ({ item, onActivate }) => {
  const { label, icon, component } = item;

  const [modalComponent, setModalComponent] = useGlobal(
    "interface.modalComponent"
  );

  return (
    <React.Fragment>
      <ListItem
        onClick={() => {
          setModalComponent(component);
          onActivate();
        }}
        button
      >
        <ListItemText primary={label} />
        {icon && <Icon style={{ marginLeft: "2rem" }}>{icon}</Icon>}
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
