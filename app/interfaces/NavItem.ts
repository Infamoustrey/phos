export interface NavListItem {
  label: string;
  items: Array<NavListSubItem>;
}

export interface NavListSubItem {
  label: string;
  component: any;
  icon?: string;
}
