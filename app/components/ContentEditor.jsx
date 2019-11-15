import React, { selectedItem, useGlobal } from "reactn";
import { Grid, useTheme, TextField } from "@material-ui/core";

const ContentEditor = () => {
  const [selectedItem, setSelectedItem] = useGlobal("selectedItem");

  const [textItems, setTextItems] = useGlobal("textItems");

  const theme = useTheme();

  return (
    <Grid container>
      <Grid item xs={12} style={{ padding: theme.spacing(2) }}>
        <TextField
          label="Title"
          fullWidth
          variant="outlined"
          value={selectedItem.title}
        />
        {textItems &&
          textItems
            .filter(textItem => textItem.item_id === selectedItem._id)
            .map(textItem => (
              <TextField
                style={{ marginTop: theme.spacing(2) }}
                fullWidth
                multiline
                rows={4}
                rowsMax={8}
                label="Content"
                variant="outlined"
                value={textItem.text}
              />
            ))}
      </Grid>
    </Grid>
  );
};

export default ContentEditor;
