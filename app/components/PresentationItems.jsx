import React from "react";

import { connect } from "react-redux";

import { TextField, Grid, List, Typography } from "@material-ui/core";

import Section from "./Section";

const PresentationItems = props => {
  const { presentation, sections = [] } = props;

  return (
    <Grid container>
      <Grid item xs={12} style={{ padding: "1rem" }}>
        <Typography variant="subtitle1">
          Date: {presentation.date || ""}
        </Typography>
        <TextField
          value={presentation.title || ""}
          fullWidth
          margin="dense"
          variant="outlined"
          label="Title"
        />
        <List>
          {sections.map((section, i) => (
            <Section key={i} section={section} />
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  presentation: state.Presentation,
  sections: state.Sections
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PresentationItems);
