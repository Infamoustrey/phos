import React, { useGlobal, createElement } from "reactn";

import { CONTENT, BIBLE } from "../constants/ItemTypes";

import { Paper, useTheme } from "@material-ui/core";

import NoSelectedItem from "./NoSelectedItem";
import ContentEditor from "./ContentEditor";
import BibleEditor from "./BibleEditor";

const EditPane = () => {
  const theme = useTheme();

  const [selectedItem] = useGlobal("selectedItem");

  if (!selectedItem) return <NoSelectedItem />;

  const editor = {
    [CONTENT]: ContentEditor,
    [BIBLE]: BibleEditor
  };

  return (
    <Paper elevation={2} style={{ margin: theme.spacing(2) }}>
      {createElement(editor[selectedItem.type])}
    </Paper>
  );
};

export default EditPane;
