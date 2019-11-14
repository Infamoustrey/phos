import { addReducer, setGlobal, getDispatch } from "reactn";

import uuid from "uuid/v1";

const ADD_TEXT_ITEM = "ADD_TEXT_ITEM";

setGlobal({ text_items: [] });

addReducer(ADD_TEXT_ITEM, (global, dispatch, text_item) => ({
  text_items: [...global.text_items, text_item]
}));

const createTextItem = async (item_id, text, options) => {
  let text_item = { _id: uuid(), item_id, text, options };

  await getDispatch()[ADD_TEXT_ITEM](text_item);

  return Promise.resolve(text_item);
};

export { ADD_TEXT_ITEM, createTextItem };
