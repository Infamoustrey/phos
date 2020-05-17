import React from "react";
import { render } from "react-dom";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
import green from "@material-ui/core/colors/green";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DayJsUtils from "@date-io/dayjs";

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: green,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DayJsUtils}>
        <h1>Hello</h1>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById("app"));
