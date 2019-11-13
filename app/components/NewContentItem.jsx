import React, { useState } from "react";

import { connect } from "react-redux";
import { Items, TextItems } from "../actions";

import { CONTENT } from "../constants/ItemTypes";

import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";

const NewContentForm = props => {
  const {
    active,
    setActive,
    onAction,
    presentation,
    sections,
    addItem,
    addTextItem
  } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState();

  let section = sections.find(
    section => section.presentation_id == presentation._id
  );

  const submit = async () => {
    let item = await addItem(presentation._id, section._id, CONTENT, title);
    await addTextItem(item.id, content, {});
    setActive(false);
    onAction();
  };

  return (
    <Dialog open={active} onClose={() => setActive(false)}>
      <DialogTitle>Add Content Item</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Content"
          multiline
          fullWidth
          rows="4"
          value={content}
          onChange={e => setContent(e.target.value)}
          margin="normal"
          variant="outlined"
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
  presentation: state.Presentation,
  sections: state.Sections
});

const mapDispatchtoProps = { ...Items, ...TextItems };

export default connect(mapStateToProps, mapDispatchtoProps)(NewContentForm);
