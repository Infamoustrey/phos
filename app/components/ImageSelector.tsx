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

import { LazyLoadImage } from "react-lazy-load-image-component";

let images = [];

getPixabayImages().then(result => (images = result));

const ImageSelector = () => {
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
              <GridList cellHeight={200} cols={3}>
                {images.map((image, i) => (
                  <GridListTile key={i} cols={1}>
                    <LazyLoadImage height={200} width="100%" src={image} />
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
