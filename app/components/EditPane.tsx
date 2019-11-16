import React, { createElement } from "reactn";

import { useGlobal } from "../store";

import { ItemTypes } from "../enums/ItemTypes";

import { Paper, useTheme } from "@material-ui/core";

import NoSelectedItem from "./NoSelectedItem";
import ContentEditor from "./ContentEditor";
import BibleEditor from "./BibleEditor";

const EditPane = () => {
  const theme = useTheme();

  const [selectedItem] = useGlobal("selectedItem");

  if (!selectedItem) return <NoSelectedItem />;

  const editor = {
    [ItemTypes.CONTENT]: ContentEditor,
    [ItemTypes.BIBLE]: BibleEditor
  };

  return (
    <Paper elevation={2} style={{ margin: theme.spacing(2) }}>
      {createElement(editor[selectedItem.type])}
    </Paper>
  );
};

export default EditPane;
