import React, { useState } from "reactn";

import { useGlobal, useAction } from "../store";

import { CREATE_SECTION } from "../store/Sections";
import { CREATE_ITEM } from "../store/ServiceItems";
import { CREATE_TEXT_ITEM } from "../store/TextItems";

import { ServiceItemTypes } from "../enums/ServiceItemTypes";

import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Card,
  CardActionArea,
  CardMedia
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import ImageSelector from "./ImageSelector";

const NewContentItem = props => {
  const { onComplete } = props;

  const createSection = useAction(CREATE_SECTION);
  const createItem = useAction(CREATE_ITEM);
  const createTextItem = useAction(CREATE_TEXT_ITEM);

  const [sections] = useGlobal("sections");
  const [presentation] = useGlobal("presentation");
  const [userInterface, setUserInterface] = useGlobal("userInterface");

  const [open, setOpen] = useState(true);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState();
  const [backgroundImage, setBackgroundImage] = useState("");

  let section = sections.find(
    section => section.presentation_id == presentation.id
  );

  const submit = async () => {
    if (!section) {
      section = await createSection(presentation.id, "Section");
    }
    let item = await createItem(
      presentation.id,
      section.id,
      ServiceItemTypes.CONTENT,
      title
    );
    await createTextItem(item.id, content, {});
    setUserInterface({ ...userInterface, editMode: true });
    setOpen(false);
    onComplete();
  };

  const cancel = () => {
    setOpen(false);
    onComplete();
  };

  return (
    <Dialog open={open} onClose={cancel}>
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
          style={{ marginBottom: "1rem" }}
          onChange={e => setContent(e.target.value)}
          margin="normal"
          variant="outlined"
        />
        {backgroundImage ? (
          <Card>
            <CardActionArea>
              <CardMedia
                image={backgroundImage}
                style={{ height: "250px" }}
              ></CardMedia>
              <IconButton
                onClick={() => setBackgroundImage("")}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  color: "red"
                }}
              >
                <CloseIcon />
              </IconButton>
            </CardActionArea>
          </Card>
        ) : (
          <ImageSelector
            onImageSelect={imageSrc => setBackgroundImage(imageSrc)}
          />
        )}
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

export default NewContentItem;
