import { addReducer, setGlobal, getDispatch } from "reactn";

import uuid from "uuid/v1";

const ADD_TEXT_ITEM = "ADD_TEXT_ITEM";

setGlobal({ textItems: [] });

addReducer(ADD_TEXT_ITEM, (global, dispatch, textItem) => ({
  textItems: [...global.textItems, textItem]
}));

const createTextItem = async (item_id, text, options) => {
  let textItem = { _id: uuid(), item_id, text, options };

  await getDispatch()[ADD_TEXT_ITEM](textItem);

  return Promise.resolve(textItem);
};

export { ADD_TEXT_ITEM, createTextItem };
