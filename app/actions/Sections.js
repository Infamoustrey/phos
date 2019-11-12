import uuid from "uuid/v1";

import { ADD_SECTION } from "../reducers/Sections";

export default {
  addSection: (presentation_id, title) => async dispatch => {
    let section = { _id: uuid(), presentation_id, title };
    console.log(section);
    dispatch({ type: ADD_SECTION, section });
  }
};
