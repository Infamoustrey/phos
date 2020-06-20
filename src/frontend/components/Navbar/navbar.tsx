import React from 'react';

import {AppBar, Toolbar} from '@material-ui/core';
import {NavItem} from "./nav-item";

import {NavigationItems} from './navigation-items'

export const Navbar = () => {

    return (
        <AppBar>
            <Toolbar variant="dense">
                {NavigationItems.map((item) => (
                    <NavItem key={item.text} item={item}/>
                ))}
            </Toolbar>

        </AppBar>
    );
};
