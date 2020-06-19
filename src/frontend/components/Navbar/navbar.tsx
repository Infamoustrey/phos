import React, {useEffect, useState} from 'react';

import {AppBar, Toolbar, Button} from '@material-ui/core';
import {NavItem} from "./nav-item";

import {NavigationItems} from './navigation-items'

import {modals} from "../../store";
import {useObservable} from "../../hooks/useObservable";

export const Navbar = () => {

    const activeModal = useObservable(modals.activeModal);

    return (
        <AppBar>
            <Toolbar variant="dense">
                {NavigationItems.map((item) => (
                    <NavItem key={item.text} item={item}/>
                ))}
                <Button color="inherit" onClick={() => modals.activeModal.next("Heyo")}>
                    Test - {activeModal}
                </Button>
            </Toolbar>

        </AppBar>
    );
};
