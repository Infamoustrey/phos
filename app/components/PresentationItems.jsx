import React, { useState } from "react";

import {
  TextField,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  Divider,
  IconButton,
  Collapse
} from "@material-ui/core";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const PresentationItems = props => {
  const [open, setOpen] = useState(false);

  return (
    <Grid container>
      <Grid item xs={12} style={{ padding: "1rem" }}>
        <TextField fullWidth variant="outlined" label="Title" />
        <List>
          <ListItem button dense onClick={() => setOpen(!open)}>
            <ListItemText primary="Pre-Service Loop" />
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
        </List>
      </Grid>
    </Grid>
  );
};

export default PresentationItems;
