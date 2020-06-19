import React, {createElement, FunctionComponent, MouseEvent, useState} from "react";

import {Button, Menu, List, ListItem, ListItemText, ListItemIcon} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {NavigationItem} from "./types";

const useStyles = makeStyles({
    button: {
        marginRight: '1rem',
    },
});

interface NavItemProps {
    item: NavigationItem;
}

export const NavItem: FunctionComponent<NavItemProps> = ({item}: NavItemProps) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => setAnchorEl(null);

    const handleAction = (action: Function) => {
        action()
    }

    return (
        <>
            <Button color="inherit" className={classes.button} onClick={handleClick}>
                {item.text}
            </Button>
            {
                item.children &&
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} keepMounted onClose={handleClose}>
                    <List>
                        {item.children.map(child =>
                            <ListItem key={child.text} button>
                                <ListItemText primary={child.text} onClick={() => {
                                    if (child.action !== undefined) handleAction(child.action);
                                }}/>
                                {child.icon !== undefined &&
                                <ListItemIcon>{createElement(child.icon, {})}</ListItemIcon>}
                            </ListItem>)
                        }
                    </List>
                </Menu>
            }
        </>
    );
};