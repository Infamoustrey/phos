import React, { Component } from "react";

import { Provider as ReduxProvider } from "react-redux";
import store from "../store";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
import green from "@material-ui/core/colors/green";

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

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ReduxProvider store={store}>
            <React.Fragment>
              <Navbar />
              <Content />
            </React.Fragment>
          </ReduxProvider>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    );
  }
}

export { App };
