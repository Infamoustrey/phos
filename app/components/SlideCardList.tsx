import React from "reactn";

import {
  Paper,
  Grid,
  Card,
  CardActionArea,
  CardMedia
} from "@material-ui/core";

const SlideCardList = props => {
  const items = new Array(15).fill(0).map(() => {
    return {
      img: "storage/stock/jesus.jpg",
      title: "Image",
      author: "author"
    };
  });
  return (
    <Paper elevation={2}>
      <Grid container spacing={2}>
        {items.map((item, i) => (
          <Grid key={i} item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  style={{ height: 160 }}
                  image={item.img}
                  title={item.title}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default SlideCardList;
