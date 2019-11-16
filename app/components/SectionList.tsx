import React, { useState } from "reactn";

import { useGlobal } from "../store";

import { ListItem, ListItemText, Divider, Collapse } from "@material-ui/core";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import SectionListItem from "./SectionListItem";

const SectionList = ({ section }) => {
  const [serviceItems] = useGlobal("serviceItems");

  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ListItem button dense onClick={() => setOpen(!open)}>
        <ListItemText primary={section.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Divider component="li" />
      <Collapse in={open} timeout="auto" unmountOnExit>
        {serviceItems
          .filter(item => item.section_id === section.id)
          .map((item, i) => (
            <SectionListItem key={i} item={item} />
          ))}
      </Collapse>
    </React.Fragment>
  );
};

export default SectionList;
