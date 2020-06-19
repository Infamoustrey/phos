import RightArrowIcon from "@material-ui/icons/ArrowRight";
import Info from "@material-ui/icons/Info";
import {NavigationItem} from "./types";

export const NavigationItems: NavigationItem[] = [
    {
        text: 'File',
        children: [
            {
                text: 'New',
            },
            {text: 'Open'},
            {text: 'Open Recent', icon: RightArrowIcon},
        ],
    },
    {
        text: 'Add Item',
        children: [
            {text: 'Song'},
            {text: 'Bible'},
            {text: 'Content'},
            {text: 'Web Page'},
            {text: 'Video'},
        ],
    },
    {
        text: 'Settings',
        children: [
            {text: 'Audio'},
            {text: 'Video'},
            {text: 'Preferences'},
        ],
    },
    {
        text: 'Help',
        children: [
            {text: 'About Phos', icon: Info}
        ],
    },
];