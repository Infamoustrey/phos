import { combineReducers } from "redux";

import Sections from "./Sections";
import Presentation from "./Presentation";
import Presentations from "./Presentations";

export default combineReducers({ Presentation, Presentations, Sections });
