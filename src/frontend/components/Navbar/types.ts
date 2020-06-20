import {FunctionComponent,} from "react";

export type AsyncFunction = <A>(...args: A[]) => Promise<boolean>;

export interface NavigationItem {
    text: string;
    children?: NavigationItem[];
    icon?: FunctionComponent;
    action?: AsyncFunction; // Allow any anonymous async function to be passed, flexible action
}

