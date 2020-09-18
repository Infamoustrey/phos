import React from "react";
import { render } from "react-dom";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
import green from "@material-ui/core/colors/green";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DayJsUtils from "@date-io/dayjs";
import { Navbar } from "./Navbar/navbar";
import { Grid } from "@material-ui/core";

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
        <Grid container direction="column" style={{ height: "100%" }}>
          <Grid item>
            <Navbar />
          </Grid>
          <Grid item style={{ flexGrow: 1 }}></Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById("app"));
