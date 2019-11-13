import React, { useState } from "react";

import { connect } from "react-redux";

import { AppBar, Toolbar, FormControlLabel, Switch } from "@material-ui/core";

import NavItem from "./NavItem";
import NewPresentationForm from "./NewPresentationForm";
import NewSectionForm from "./NewSectionForm";

const Navbar = props => {
  const { presentation } = props;

  const [presentMode, setPresentMode] = useState(false);

  let navItems = [
    {
      label: "File",
      items: [
        { label: "New", component: NewPresentationForm },
        { label: "Open" }
      ]
    }
  ];

  if (presentation && presentation._id) {
    navItems.push({
      label: "Add Item",
      items: [
        { label: "Song", component: NewPresentationForm, icon: "music_note" },
        { label: "Bible", component: NewPresentationForm, icon: "book" },
        { label: "Content", component: NewPresentationForm, icon: "dashboard" },
        {
          label: "Section",
          component: NewSectionForm,
          icon: "short_text"
        },
        {
          label: "Announcement",
          component: NewPresentationForm,
          icon: "announcement"
        },
        {
          label: "Video",
          component: NewPresentationForm,
          icon: "ondemand_video"
        },
        {
          label: "Image Slideshow",
          component: NewPresentationForm,
          icon: "collections"
        }
      ]
    });
  }

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        {navItems.map((item, i) => (
          <NavItem key={i} label={item.label} items={item.items} />
        ))}
        {/* <div style={{ flex: 1 }}></div>
        <FormControlLabel
          control={
            <Switch
              checked={presentMode}
              onChange={() => setPresentMode(!presentMode)}
              value="checkedA"
            />
          }
          label="Present Mode"
        /> */}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({ presentation: state.Presentation });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
