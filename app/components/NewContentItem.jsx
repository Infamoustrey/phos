import React, { useState } from "react";

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
    onComplete,
    presentation,
    sections,
    addItem,
    addTextItem,
    addSection
  } = props;

  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();

  // let section = sections.find(
  //   section => section.presentation_id == presentation._id
  // );

  const submit = async () => {
    // if (!section) {
    //   section = await addSection(presentation._id, "Section");
    // }
    // let item = await addItem(presentation._id, section._id, CONTENT, title);
    // await addTextItem(item._id, content, {});
    // setOpen(false);
    // onComplete();
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
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

export default NewContentForm;
