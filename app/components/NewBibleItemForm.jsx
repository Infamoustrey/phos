import React, { useState, useGlobal, useRef, useEffect } from "reactn";

import { createSection } from "../store/Sections";
import { createItem } from "../store/Items";
import { createBibleItem } from "../store/BibleItem";

import { BIBLE } from "../constants/ItemTypes";
import englishVersionList from "../constants/bible-versions/English";
import { searchForVerse } from "../lib/biblegateway-api";

import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme
} from "@material-ui/core";

const NewBibleItemForm = props => {
  const { onComplete } = props;
  const inputLabel = useRef(null);
  const theme = useTheme();

  const [sections] = useGlobal("sections");
  const [presentation] = useGlobal("presentation");
  const [editMode, setEditMode] = useGlobal("interface.editMode");

  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [verse, setVerse] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [content, setContent] = useState("");
  const [scripture, setScripture] = useState("");
  const [version, setVersion] = useState("");

  const queryVerse = async () => {
    setErrorMessage(null);
    if (!version) return Promise.resolve();
    let response;
    try {
      response = await searchForVerse(verse, version);
    } catch (e) {
      setErrorMessage(
        "Could not find verse, try this format {book} {chapter}:{verses ex: 1, 1-2}"
      );
      return Promise.resolve();
    }

    setVerse(response.verse);
    setContent(response.content.join("\n\n"));
    return Promise.resolve();
  };

  let section = sections.find(
    section => section.presentation_id == presentation._id
  );

  const submit = async () => {
    if (!section) {
      section = await createSection(presentation._id, "Section");
    }
    let item = await createItem(presentation._id, section._id, BIBLE, title);
    await createTextItem(item._id, content, {});
    setEditMode(true);
    setOpen(false);
    onComplete();
  };

  const cancel = () => {
    setOpen(false);
    onComplete();
  };

  return (
    <Dialog open={open} onClose={cancel}>
      <DialogTitle>Add Bible Item</DialogTitle>
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
          fullWidth
          label="Verse"
          error={!!errorMessage}
          helperText={errorMessage}
          variant="outlined"
          value={verse}
          onChange={e => setVerse(e.target.value)}
          onBlur={queryVerse}
          style={{ marginBottom: "1rem" }}
        />
        <FormControl fullWidth variant="outlined">
          <InputLabel ref={inputLabel}>Version</InputLabel>
          <Select
            value={version}
            onChange={e => {
              setVersion(e.target.value);
              queryVerse();
            }}
            labelWidth={
              inputLabel.current
                ? inputLabel.current.offsetWidth
                : theme.spacing(7)
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {englishVersionList.map((item, i) => (
              <MenuItem key={i} value={item.version}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
        <Button color="secondary" onClick={cancel}>
          Cancel
        </Button>
        <Button color="primary" onClick={submit} variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewBibleItemForm;
