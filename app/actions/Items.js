import uuid from "uuid/v1";

import { ADD_ITEM } from "../reducers/Items";

export default {
  addItem: (presentation_id, section_id, type, title) => async dispatch => {
    let item = { _id: uuid(), presentation_id, section_id, type, title };

    dispatch({ type: ADD_ITEM, item });

    return Promise.resolve(item);
  }
};
