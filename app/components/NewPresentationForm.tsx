import React, { useState } from "reactn";

import { useDispatch } from "../store";
import { CREATE_PRESENTATION } from "../store/Presentations";

import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";

import { KeyboardDatePicker } from "@material-ui/pickers";
import dayjs from "dayjs";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

const NewPresentationForm = ({ onComplete }) => {
  const createPresentation = useDispatch(CREATE_PRESENTATION);

  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(dayjs().format("MM/DD/YYYY"));

  const submit = async () => {
    await createPresentation(title, date);
    setOpen(false);
    onComplete();
  };
  const cancel = async () => {
    setOpen(false);
    onComplete();
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={() => cancel()}>
      <DialogTitle>Create a Presentation</DialogTitle>
      <DialogContent>
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <div style={{ flex: "1" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "3"
            }}
          >
            <TextField
              value={title}
              onChange={e => setTitle(e.target.value)}
              onKeyPress={e => e.key === "Enter" && submit()}
              label="Title"
              variant="outlined"
            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="Date"
              value={date}
              onChange={(date: MaterialUiPickersDate) =>
                setDate(dayjs(date).format("MM/DD/YYYY"))
              }
            />
          </div>
          <div style={{ flex: "1" }}></div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={() => cancel()}>
          Cancel
        </Button>
        <Button color="primary" onClick={() => submit()} variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewPresentationForm;
