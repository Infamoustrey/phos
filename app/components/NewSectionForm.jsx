import React, { useState, useGlobal, useDispatch } from "reactn";

import { createSection } from "../store/Sections";

import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";

const NewSectionForm = props => {
  const { onComplete } = props;

  const [presentation] = useGlobal("presentation");

  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState("");

  const submit = async () => {
    await createSection(presentation._id, title);
    setOpen(false);
    onComplete();
  };

  return (
    <Dialog open={open} onClose={() => setActive(false)}>
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

export default NewSectionForm;
