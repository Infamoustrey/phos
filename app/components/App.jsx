import React, { Component } from "react";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
import green from "@material-ui/core/colors/green";
import { Navbar } from "./Navbar";

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
                <React.Fragment>
                    <Navbar />
                    <h1>Heyo this is the app</h1>
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

export { App };
