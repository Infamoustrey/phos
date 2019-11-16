import React, { useState } from "reactn";

import { useGlobal, useAction } from "../store";
import { CREATE_SECTION } from "../store/Sections";

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
  const createSection = useAction(CREATE_SECTION);

  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState("");

  const submit = async () => {
    await createSection(presentation.id, title);
    setOpen(false);
    onComplete();
  };

  const onCancel = async () => {
    setOpen(false);
    onComplete();
  };

  return (
    <Dialog open={open} onClose={onCancel}>
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
        <Button color="secondary" onClick={onCancel}>
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
