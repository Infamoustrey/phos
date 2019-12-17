import React from "reactn";

import { useGlobal } from "../store";

import { Card, CardActionArea, CardMedia } from "@material-ui/core";

const ContentSlide = props => {
  const [selectedItem] = useGlobal("selectedItem");
  console.log(selectedItem);
  return (
    <Card style={{ width: "100%" }}>
      <CardActionArea>
        <CardMedia
          style={{ height: 160 }}
          image={selectedItem.background_image_url}
        ></CardMedia>
      </CardActionArea>
    </Card>
  );
};

export default ContentSlide;
