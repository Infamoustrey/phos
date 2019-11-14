import React, { useState, useGlobal } from "reactn";

import { createSection } from "../store/Sections";
import { createItem } from "../store/Items";
import { createTextItem } from "../store/TextItems";

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
  const { onComplete } = props;

  const [sections] = useGlobal("sections");
  const [presentation] = useGlobal("presentation");

  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();

  let section = sections.find(
    section => section.presentation_id == presentation._id
  );

  const submit = async () => {
    if (!section) {
      section = await createSection(presentation._id, "Section");
    }
    let item = await createItem(presentation._id, section._id, CONTENT, title);
    await createTextItem(item._id, content, {});
    setOpen(false);
    onComplete();
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
