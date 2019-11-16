import React from "reactn";

import { useGlobal } from "../store";

import { TextField, Grid, List, Typography } from "@material-ui/core";

import SectionList from "./SectionList";

const PresentationItems = () => {
  const [presentation, setPresentation] = useGlobal("presentation");
  const [sections] = useGlobal("sections");

  return (
    <Grid container>
      <Grid item xs={12} style={{ padding: "1rem" }}>
        <Typography variant="subtitle1">
          Date: {presentation.date || ""}
        </Typography>
        <TextField
          value={presentation.title || ""}
          onChange={e =>
            setPresentation({ ...presentation, title: e.target.value })
          }
          fullWidth
          margin="dense"
          variant="outlined"
          label="Title"
        />
        <List>
          {sections.map((section, i) => (
            <SectionList key={i} section={section} />
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default PresentationItems;
