import { addReducer, setGlobal, getDispatch } from "reactn";

import * as uuid from "uuid/v1";

const ADD_BIBLE_ITEM = "ADD_BIBLE_ITEM";
const SET_BIBLE_ITEM = "SET_BIBLE_ITEM";
const CREATE_BIBLE_ITEM = "CREATE_BIBLE_ITEM";

export { ADD_BIBLE_ITEM, SET_BIBLE_ITEM, CREATE_BIBLE_ITEM };

export default {
  state: {
    bibleItems: []
  },
  reducers: {
    [ADD_BIBLE_ITEM]: (global, dispatch, bibleItem) => ({
      bibleItems: [...global.bibleItems, bibleItem]
    }),
    [SET_BIBLE_ITEM]: (global, dispatch, bibleItem) => ({
      bibleItems: global.bibleItems.map(item =>
        item.id == bibleItem._id ? bibleItem : item
      )
    })
  },
  actions: {
    [CREATE_BIBLE_ITEM]: async (
      global,
      dispatch,
      item_id,
      passage,
      version,
      verses
    ) => {
      let bibleItem = { id: uuid(), item_id, passage, version, verses };

      await dispatch[ADD_BIBLE_ITEM](bibleItem);

      return Promise.resolve(bibleItem);
    }
  }
};
