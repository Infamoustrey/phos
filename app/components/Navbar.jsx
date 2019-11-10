import React, { Component } from "react";

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">Phos</Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export { Navbar };
