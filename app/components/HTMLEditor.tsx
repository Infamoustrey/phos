import React, { useState } from "reactn";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Typography, Box } from "@material-ui/core";
import { makeStyles, useTheme, DefaultTheme } from "@material-ui/styles";

const useStyles = makeStyles({
  root: (theme: any) => ({
    borderWidth: 1,
    position: "relative",
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,0.23)",
    borderRadius: 4,
    padding: "0.5rem",
    transition: theme.transitions.create(["border-color", "borderWidth"], {
      duration: theme.transitions.duration.standard
    })
  }),
  rootFocus: theme => ({
    borderColor: theme.palette.primary.main,
    borderWidth: 2
  }),
  label: theme => ({
    position: "absolute",
    left: theme.spacing(1),
    top: theme.spacing(19),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    fontSize: "1rem",
    backgroundColor: "white",
    color: "rgba(0,0,0,0.23)",
    transition: theme.transitions.create(["color", "top", "font-size"], {
      duration: theme.transitions.duration.standard
    })
  }),
  labelFocus: theme => ({
    color: theme.palette.primary.main,
    top: "-0.6rem",
    fontSize: "0.75rem"
  }),
  editorWrapper: theme => ({
    marginTop: "0",
    transition: theme.transitions.create(["margin-top"], {
      duration: theme.transitions.duration.standard
    })
  }),
  editorWrapperFocus: theme => ({
    marginTop: "0"
  })
});

const HTMLEditor = ({ label, value, setValue }) => {
  const [focus, setFocus] = useState(false);

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.root + " " + (focus && classes.rootFocus)}>
      <Typography
        classes={{ root: classes.label + " " + (focus && classes.labelFocus) }}
      >
        {label}
      </Typography>
      <div
        className={
          classes.editorWrapper + " " + (focus && classes.editorWrapperFocus)
        }
      >
        <Editor
          editorState={value}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={setValue}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "fontFamily",
              "list",
              "textAlign",
              "colorPicker",
              "remove",
              "history"
            ]
          }}
        />
      </div>
    </Box>
  );
};

export default HTMLEditor;
