import { combineReducers } from "redux";

import Items from "./Items";
import TextItems from "./TextItems";
import Sections from "./Sections";
import Presentation from "./Presentation";
import Presentations from "./Presentations";

export default combineReducers({
  Presentation,
  Presentations,
  Sections,
  Items,
  TextItems
});
