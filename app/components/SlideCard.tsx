import React from "reactn";

import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent
} from "@material-ui/core";

const SlideCard = props => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          style={{ height: 100 }}
          image="https://picsum.photos/400/400.jpg"
          title="Test"
        ></CardMedia>
      </CardActionArea>
      <CardContent>
        <Typography variant="subtitle1">Test</Typography>
      </CardContent>
    </Card>
  );
};

export default SlideCard;
