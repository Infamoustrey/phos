import React from "react";

import { connect } from "react-redux";

import { TextField, Grid, List, Typography } from "@material-ui/core";

import SectionList from "./SectionList";

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
            <SectionList key={i} section={section} />
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
