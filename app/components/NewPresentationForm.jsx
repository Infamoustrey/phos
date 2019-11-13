import React, { useState } from "react";

import { connect } from "react-redux";
import { Presentations } from "../actions";

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

const NewPresentationForm = props => {
  const { active, setActive, onAction, createPresentation } = props;

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(dayjs().format("MM/DD/YYYY"));

  const submit = async () => {
    await createPresentation(title, date);
    setActive(false);
    onAction();
  };

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={active}
      onClose={() => setActive(false)}
    >
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
              onChange={e => setDate(e.target.value)}
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

const mapStateToProps = state => ({});

const mapDispatchtoProps = { ...Presentations };

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(NewPresentationForm);
