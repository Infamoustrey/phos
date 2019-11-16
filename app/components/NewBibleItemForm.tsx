import React, { useState, useRef } from "reactn";

import { useAction, useGlobal } from "../store";

import { CREATE_SECTION } from "../store/Sections";
import { CREATE_ITEM } from "../store/ServiceItems";
import { CREATE_BIBLE_ITEM } from "../store/BibleItems";

import { ItemTypes } from "../enums/ItemTypes";
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
  const [userInterface, setUserInterface] = useGlobal("userInterface");

  const createSection = useAction(CREATE_SECTION);
  const createItem = useAction(CREATE_ITEM);
  const createBibleItem = useAction(CREATE_BIBLE_ITEM);

  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [passage, setPassage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [verses, setVerses] = useState("");
  const [version, setVersion] = useState("");

  const queryVerse = async () => {
    setErrorMessage(null);
    if (!version || !passage) return Promise.resolve();
    let response;
    try {
      response = await searchForVerse(passage, version);
    } catch (e) {
      setErrorMessage(
        "Could not find verse, try this format {book} {chapter}:{verses ex: 1, 1-2}"
      );
      return Promise.resolve();
    }

    setPassage(response.verse);
    setVerses(response.content.join("\n\n"));
    return Promise.resolve();
  };

  let section = sections.find(
    section => section.presentation_id == presentation.id
  );

  const submit = async () => {
    if (!passage) return Promise.resolve();

    if (!title) setTitle(passage);

    if (!section) {
      section = await createSection(presentation.id, "Section");
    }

    let item = await createItem(
      presentation.id,
      section.id,
      ItemTypes.BIBLE,
      title
    );

    await createBibleItem(item.id, passage, version, verses);

    setUserInterface({ ...userInterface, editMode: true });

    onComplete();

    return Promise.resolve();
  };

  const cancel = onComplete;

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
          label="Passage"
          error={!!errorMessage}
          helperText={errorMessage}
          variant="outlined"
          value={passage}
          onChange={e => setPassage(e.target.value)}
          onBlur={queryVerse}
          style={{ marginBottom: "1rem" }}
        />
        <FormControl fullWidth variant="outlined">
          <InputLabel ref={inputLabel}>Version</InputLabel>
          <Select
            value={version}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setVersion(e.target.value);
              queryVerse();
            }}
            onBlur={queryVerse}
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
          label="Verses"
          multiline
          fullWidth
          rows="4"
          value={verses}
          onChange={e => setVerses(e.target.value)}
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
