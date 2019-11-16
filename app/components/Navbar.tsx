import React, { useState, createElement } from "reactn";

import { useGlobal } from "../store";

import { AppBar, Toolbar, FormControlLabel, Switch } from "@material-ui/core";

import NavItem from "./NavItem";
import NewPresentationForm from "./NewPresentationForm";
import NewSectionForm from "./NewSectionForm";
import NewContentItem from "./NewContentItem";
import NewBibleItemForm from "./NewBibleItemForm";
import { NavListItem } from "../interfaces/NavItem";

const Navbar = props => {
  const [presentation] = useGlobal("presentation");

  const [presentMode, setPresentMode] = useState(false);
  const [userInterface, setUserInterface] = useGlobal("userInterface");

  let navItems: NavListItem[] = [
    {
      label: "File",
      items: [
        { label: "New", component: NewPresentationForm }
        // { label: "Open" }
      ]
    }
  ];
  if (presentation && presentation.id) {
    navItems.push({
      label: "Add Item",
      items: [
        { label: "Song", component: NewPresentationForm, icon: "music_note" },
        { label: "Bible", component: NewBibleItemForm, icon: "book" },
        { label: "Content", component: NewContentItem, icon: "dashboard" },
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
    <React.Fragment>
      <AppBar position="static">
        <Toolbar variant="dense">
          {navItems.map((item, i) => (
            <NavItem key={i} label={item.label} items={item.items} />
          ))}
          {presentation && (
            <React.Fragment>
              <div style={{ flex: 1 }}></div>
              <FormControlLabel
                control={
                  <Switch
                    checked={presentMode}
                    onChange={() => setPresentMode(!presentMode)}
                    value="checkedA"
                  />
                }
                label="Present Mode"
              />
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
      {userInterface.modalComponent &&
        createElement(userInterface.modalComponent, {
          onComplete: () =>
            setUserInterface({ ...userInterface, modalComponent: null })
        })}
    </React.Fragment>
  );
};

export default Navbar;
