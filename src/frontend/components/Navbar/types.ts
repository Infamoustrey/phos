import {FunctionComponent,} from "react";

export interface NavigationItem {
    text: string;
    children?: NavigationItem[];
    icon?: FunctionComponent;
    action?: Function;
}

