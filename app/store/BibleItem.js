import { addReducer, setGlobal, getDispatch } from "reactn";

import uuid from "uuid/v1";

const ADD_BIBLE_ITEM = "ADD_BIBLE_ITEM";

setGlobal({ bibleItems: [] });

addReducer(ADD_BIBLE_ITEM, (global, dispatch, bibleItem) => ({
  bibleItems: [...global.bibleItems, bibleItem]
}));

const createBibleItem = async (item_id, scripture, version) => {
  let bibleItem = { _id: uuid(), item_id, scripture, version };

  await getDispatch()[ADD_BIBLE_ITEM](bibleItem);

  return Promise.resolve(bibleItem);
};

export { ADD_BIBLE_ITEM, createBibleItem };
