import React, { Children } from 'react';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        marginRight: '1rem',
    },
});

interface NavItem {
    text: string;
    children?: NavItem[];
}

interface NavItemProps {
    item: NavItem;
}

const NavItem = ({ item }: NavItemProps) => {
    const classes = useStyles();

    return (
        <>
            <Button color="inherit" className={classes.button}>
                {item.text}
            </Button>
            {item.children && item.children}
        </>
    );
};

export const Navbar = () => {
    const classes = useStyles();

    const navItems = [
        {
            text: 'File',
            children: [{ text: 'New' }],
        },
        {
            text: 'Add Item',
            children: [{ text: 'New' }],
        },
        {
            text: 'Settings',
            children: [{ text: 'New' }],
        },
        {
            text: 'View',
            children: [{ text: 'New' }],
        },
        {
            text: 'Help',
            children: [{ text: 'New' }],
        },
    ];

    return (
        <AppBar>
            <Toolbar variant="dense">
                {navItems.map((item) => (
                    <NavItem key={item.text} item={item} />
                ))}
            </Toolbar>
        </AppBar>
    );
};
