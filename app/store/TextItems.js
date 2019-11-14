import { addReducer, setGlobal } from "reactn";

import uuid from "uuid/v1";

const ADD_TEXT_ITEM = "ADD_TEXT_ITEM";

setGlobal({ text_items: [] });

addReducer(ADD_TEXT_ITEM, (global, dispatch, text, options) => ({
  text_items: [...global.text_items, { _id: uuid(), item_id, text, options }]
}));

export { ADD_TEXT_ITEM };
