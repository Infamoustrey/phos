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

for (let i in actions) {
  actions[i] = (...params) =>
    actions[i](Provider.getGlobal(), Provider.getDispatch(), ...params);
}

const useAction = name => actions[name];

// import "./Presentations";
// import "./Sections";
// import "./Items";
// import "./SelectedItem";
// import "./UserInterface";

const { useDispatch, useGlobal } = Provider;

export { useDispatch, useGlobal, useAction };
export default Provider;
