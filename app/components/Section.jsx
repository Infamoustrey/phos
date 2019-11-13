import React, { useState } from "react";

import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Collapse
} from "@material-ui/core";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const Section = ({ section }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ListItem button dense onClick={() => setOpen(!open)}>
        <ListItemText primary={section.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItem button dense>
          <ListItemAvatar>
            <Avatar
              alt="item"
              src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            />
          </ListItemAvatar>
          <ListItemText primary="Sermon Title" />
        </ListItem>
      </Collapse>
      <Divider component="li" />
    </React.Fragment>
  );
};

export default Section;
