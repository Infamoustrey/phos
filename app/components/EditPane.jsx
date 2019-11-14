import React, { useGlobal, createElement } from "reactn";

import { CONTENT } from "../constants/ItemTypes";

import { Paper, useTheme } from "@material-ui/core";

import NoSelectedItem from "./NoSelectedItem";
import ContentEditor from "./ContentEditor";

const EditPane = () => {
  const theme = useTheme();

  const [selectedItem] = useGlobal("selectedItem");

  if (!selectedItem) return <NoSelectedItem />;

  const editor = {
    [CONTENT]: ContentEditor
  };

  return (
    <Paper elevation={2} style={{ margin: theme.spacing(2) }}>
      {createElement(editor[selectedItem.type])}
    </Paper>
  );
};

export default EditPane;
