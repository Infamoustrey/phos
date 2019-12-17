import React from "reactn";

import { useGlobal } from "../store";

import { ServiceItemTypes } from "../enums/ServiceItemTypes";

import { Card, CardActionArea, CardMedia } from "@material-ui/core";
import ContentSlide from "./ContentSlide";

const CurrentSlidePreview = props => {
  const [selectedItem] = useGlobal("selectedItem");

  if (!selectedItem) return null;

  switch (selectedItem.type) {
    case ServiceItemTypes.CONTENT:
      return <ContentSlide />;
    default:
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
  }
};

export default CurrentSlidePreview;
