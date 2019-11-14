import { addReducer, setGlobal, getDispatch } from "reactn";

import { SET_ITEM } from "./SelectedItem";

import uuid from "uuid/v1";

const ADD_ITEM = "ADD_ITEM";

setGlobal({ items: [] });

addReducer(ADD_ITEM, (global, dispatch, item) => ({
  items: [...global.items, item]
}));

const createItem = async (presentation_id, section_id, type, title) => {
  let item = { _id: uuid(), presentation_id, section_id, type, title };

  await getDispatch()[ADD_ITEM](item);
  await getDispatch()[SET_ITEM](item);

  return Promise.resolve(item);
};

export { ADD_ITEM, createItem };
