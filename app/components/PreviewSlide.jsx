import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia
} from "@material-ui/core";

const PreviewSlide = props => {
  return (
    <Grid container>
      <Grid item xs={12} style={{ padding: "1rem" }}>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Current Slide
        </Typography>
        <Card style={{ width: "100%" }}>
          <CardActionArea>
            <CardMedia
              style={{ height: 160 }}
              image="https://picsum.photos/400/400.jpg"
            ></CardMedia>
          </CardActionArea>
        </Card>

        <Typography
          variant="h5"
          style={{ margin: "1.2rem", textAlign: "center" }}
        >
          Quick Actions
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card style={{ width: "100%" }}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 90 }}
                  image="https://picsum.photos/400/400.jpg"
                ></CardMedia>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card style={{ width: "100%" }}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 90 }}
                  image="https://picsum.photos/400/400.jpg"
                ></CardMedia>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card style={{ width: "100%" }}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 90 }}
                  image="https://picsum.photos/400/400.jpg"
                ></CardMedia>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card style={{ width: "100%" }}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 90 }}
                  image="https://picsum.photos/400/400.jpg"
                ></CardMedia>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PreviewSlide;
