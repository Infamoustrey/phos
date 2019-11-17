import React from "reactn";

import StateProvider from "../store";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import Navbar from "./Navbar";
import Content from "./Content";

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: green
  }
});

const App = () => {
  return (
    <StateProvider>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Navbar />
            <Content />
          </div>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </StateProvider>
  );
};

export { App };
