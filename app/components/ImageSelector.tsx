import React, { useState } from "reactn";

import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  GridList,
  GridListTile
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

import { getPixabayImages } from "../lib/pixabay-api";

let images = [];

getPixabayImages().then(results => (images = results));

const ImageSelector = props => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Select Image
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
        <AppBar position="static">
          <Toolbar color="primary">
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpen(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h6"
              style={{ flexGrow: 1, marginLeft: "2rem" }}
            >
              Select a background image!
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={12} style={{ padding: "1rem" }}>
            {images.length > 0 && (
              <GridList cellHeight={images[0].webformatHeight} cols={3}>
                {images.map((image, i) => (
                  <GridListTile key={i} cols={1}>
                    <img
                      style={{ width: image.webformatWidth }}
                      src={image.webformatURL}
                    />
                  </GridListTile>
                ))}
              </GridList>
            )}
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
};

export default ImageSelector;
