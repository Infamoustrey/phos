import React, { selectedItem } from "reactn";
import { Grid, useTheme, TextField } from "@material-ui/core";

const ContentEditor = () => {
  const [selectedItem, setSelectedItem] = useGlobal("selectedItem");

  const theme = useTheme();

  return (
    <Grid container>
      <Grid item={12} style={{ padding: theme.spacing(2) }}>
        <TextField lable="Title" value={selectedItem.title} />
      </Grid>
    </Grid>
  );
};

export default ContentEditor;
