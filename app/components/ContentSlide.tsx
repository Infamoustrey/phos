import React from "reactn";

import { Card, CardActionArea, CardMedia } from "@material-ui/core";

const ContentSlide = props => {
  return (
    <Card style={{ width: "100%" }}>
      <CardActionArea>
        <CardMedia
          style={{ height: 160 }}
          image="storage/stock/church.jpg"
        ></CardMedia>
      </CardActionArea>
    </Card>
  );
};

export default ContentSlide;
