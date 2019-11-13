import React, { useState } from "react";

import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";

const SectionListItem = ({ item }) => {
  return (
    <ListItem button dense>
      <ListItemAvatar>
        <Avatar
          alt="item"
          src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
      </ListItemAvatar>
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

export default SectionListItem;
