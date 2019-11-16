import { addReducer, setGlobal, getDispatch } from "reactn";

import uuid from "uuid/v1";

const ADD_BIBLE_ITEM = "ADD_BIBLE_ITEM";
const SET_BIBLE_ITEM = "SET_BIBLE_ITEM";

setGlobal({ bibleItems: [] });

addReducer(ADD_BIBLE_ITEM, (global, dispatch, bibleItem) => ({
  bibleItems: [...global.bibleItems, bibleItem]
}));

addReducer(SET_BIBLE_ITEM, (global, dispatch, bibleItem) => ({
  bibleItems: global.bibleItems.map(item =>
    item._id == bibleItem._id ? bibleItem : item
  )
}));

const createBibleItem = async (item_id, passage, version, verses) => {
  let bibleItem = { _id: uuid(), item_id, passage, version, verses };

  await getDispatch()[ADD_BIBLE_ITEM](bibleItem);

  return Promise.resolve(bibleItem);
};

export { ADD_BIBLE_ITEM, SET_BIBLE_ITEM, createBibleItem };
