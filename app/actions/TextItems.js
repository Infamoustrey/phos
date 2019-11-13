import uuid from "uuid/v1";

import { ADD_TEXT_ITEM } from "../reducers/TextItems";

export default {
  addTextItem: (item_id, text, options) => async dispatch => {
    let textItem = { _id: uuid(), item_id, text, options };

    dispatch({ type: ADD_TEXT_ITEM, item });

    return Promise.resolve(textItem);
  }
};
