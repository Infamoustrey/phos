import React, { useState } from "react";

import { connect } from "react-redux";
import { Sections } from "../actions";

import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";

const NewSectionForm = props => {
  const { active, setActive, onAction, addSection, presentation } = props;

  const [title, setTitle] = useState("");

  const submit = async () => {
    addSection(presentation._id, title);
    setActive(false);
    onAction();
  };

  return (
    <Dialog open={active} onClose={() => setActive(false)}>
      <DialogTitle>Add Section</DialogTitle>
      <DialogContent>
        <TextField
          label="Section Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={() => cancel()}>
          Cancel
        </Button>
        <Button color="primary" onClick={() => submit()} variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = state => ({
  presentation: state.Presentation
});

const mapDispatchtoProps = { ...Sections };

export default connect(mapStateToProps, mapDispatchtoProps)(NewSectionForm);
