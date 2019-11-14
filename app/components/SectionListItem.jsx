import React, { useState } from "react";

import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const SectionListItem = ({ item }) => {
  const theme = useTheme();

  return (
    <ListItem button dense>
      <ListItemAvatar>
        <img
          style={{
            width: theme.spacing(6),
            height: theme.spacing(4),
            marginRight: theme.spacing(2)
          }}
          src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
      </ListItemAvatar>
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

export default SectionListItem;
