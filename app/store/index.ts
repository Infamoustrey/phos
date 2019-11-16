import { createProvider } from "reactn";

import Presentations from "./Presentations";
import Sections from "./Sections";
import ServiceItems from "./ServiceItems";
import UserInterface from "./UserInterface";
import SelectedItem from "./SelectedItem";
import TextItems from "./TextItems";
import BibleItems from "./BibleItems";

const Provider = createProvider(
  {
    ...UserInterface.state,
    ...Presentations.state,
    ...Sections.state,
    ...ServiceItems.state,
    ...SelectedItem.state,
    ...BibleItems.state,
    ...TextItems.state
  },
  {
    ...Presentations.reducers,
    ...Sections.reducers,
    ...ServiceItems.reducers,
    ...SelectedItem.reducers,
    ...BibleItems.reducers,
    ...TextItems.reducers
  }
);

let actions = {
  ...Sections.actions,
  ...ServiceItems.actions,
  ...BibleItems.actions,
  ...TextItems.actions
};

const useAction = name => (...params) =>
  actions[name](Provider.getGlobal(), Provider.getDispatch(), ...params);

// import "./Presentations";
// import "./Sections";
// import "./Items";
// import "./SelectedItem";
// import "./UserInterface";

const { useDispatch, useGlobal } = Provider;

export { useDispatch, useGlobal, useAction };
export default Provider;
