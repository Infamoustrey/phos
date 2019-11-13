import React, { useState } from "react";

import { connect } from "react-redux";

import { ListItem, ListItemText, Divider, Collapse } from "@material-ui/core";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const SectionList = ({ section, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ListItem button dense onClick={() => setOpen(!open)}>
        <ListItemText primary={section.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Divider component="li" />
      <Collapse in={open} timeout="auto" unmountOnExit>
        {items
          .filter(item => item.section_id === section._id)
          .map((item, i) => (
            <SectionListItem key={i} item={item} />
          ))}
      </Collapse>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  items: state.Items
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SectionList);
