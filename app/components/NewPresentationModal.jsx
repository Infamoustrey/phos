import React, { useState } from "react";

import { connect } from "react-redux";
import { Presentations } from "../actions";

import dayjs from "dayjs";

import {
  ListItem,
  ListItemSecondaryAction,
  Icon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContent,
  TextField
} from "@material-ui/core";

import { KeyboardDatePicker } from "@material-ui/pickers";

const NewPresentationModal = props => {
  const { createPresentation } = props;

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(dayjs().format("MM/DD/YYYY"));

  const submit = () => {
    setOpen(false);
    createPresentation(title, date);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={() => setOpen(true)}>
        <ListItemText primary="New" />
        <ListItemSecondaryAction>
          <Icon>open_in_new</Icon>
        </ListItemSecondaryAction>
      </ListItem>
      <Dialog
        maxWidth="sm"
        fullWidth
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>Create a Presentation</DialogTitle>
        <DialogContent>
          <div
            style={{
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
          <Button color="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => submit()} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

const mapStateToProps = state => {};

const mapDispatchtoProps = { ...Presentations };

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(NewPresentationModal);
