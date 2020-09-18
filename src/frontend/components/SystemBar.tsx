import React, { createElement, ReactNode, useState } from "react";

import { Fab, Grid, IconButton, useTheme } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { remote } from "electron";

import Color from "color";

interface WindowButtonProps {
  icon: any;
  color: string;
  showColor: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const WindowButton = ({
  icon,
  color,
  onClick,
  showColor,
}: WindowButtonProps) => {
  const size = 16;

  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: showColor ? color : "rgba()",
        width: size,
        height: size,
        borderRadius: "50%",
        marginLeft: "0.25rem",
      }}
    >
      {createElement(icon, {
        style: {
          color: showColor ? Color(color).darken(0.5) : "rgba(0,0,0,0)",
          fontSize: size,
        },
      })}
    </div>
  );
};

export const SystemBar = () => {
  const theme = useTheme();

  const [showColor, setShowColor] = useState(false);

  return (
    <div
      style={{ display: "flex" }}
      onMouseEnter={() => setShowColor(true)}
      onMouseLeave={() => setShowColor(false)}
    >
      <WindowButton
        onClick={() =>
          remote.getCurrentWindow()?.isMaximized()
            ? remote.getCurrentWindow()?.unmaximize()
            : remote.getCurrentWindow()?.maximize()
        }
        showColor={showColor}
        icon={AddIcon}
        color="#00e676"
      />
      <WindowButton
        onClick={() => remote.getCurrentWindow()?.minimize()}
        showColor={showColor}
        icon={RemoveIcon}
        color="#ffea00"
      />
      <WindowButton
        onClick={() => remote.getCurrentWindow()?.close()}
        showColor={showColor}
        icon={CloseIcon}
        color="#ff1744"
      />
    </div>
  );
};
