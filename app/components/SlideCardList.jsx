import React from "react";
import {
  Paper,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";

const SlideCardList = props => {
  const items = new Array(15).fill(0).map(() => {
    let sqr = parseInt(Math.random(50) * 100) + 500;
    return {
      img: `https://picsum.photos/${sqr}/${sqr}.jpg`,
      title: "Image",
      author: "author"
    };
  });
  return (
    <Paper
      elevation={3}
      style={{
        padding: "1rem",
        width: "100%",
        height: 500,
        overflowY: "scroll"
      }}
    >
      <Grid container spacing={2}>
        {items.map((item, i) => (
          <Grid key={i} item xs={4}>
            <Card style={{ width: "100%" }}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 160 }}
                  image={item.img}
                  title={item.title}
                />

                <CardContent>
                  <Typography>Hi</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default SlideCardList;
