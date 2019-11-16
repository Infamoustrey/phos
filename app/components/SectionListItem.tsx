import React from "reactn";

import { useGlobal } from "../store";

import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";

const SectionListItem = ({ item }) => {
  const theme = useTheme();

  const [userInterface, setUserInterface] = useGlobal("userInterface");
  const [selectedItem, setSelectedItem] = useGlobal("selectedItem");

  const selectItem = () => {
    setSelectedItem(item);
    setUserInterface({ ...userInterface, editMode: true });
  };

  return (
    <ListItem button dense onClick={selectItem}>
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
