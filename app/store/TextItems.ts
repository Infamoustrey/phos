import * as uuid from "uuid/v1";

const ADD_TEXT_ITEM = "ADD_TEXT_ITEM";
const CREATE_TEXT_ITEM = "CREATE_TEXT_ITEM";

export { ADD_TEXT_ITEM, CREATE_TEXT_ITEM };

export default {
  state: {
    textItems: []
  },
  reducers: {
    [ADD_TEXT_ITEM]: (global, dispatch, textItem) => ({
      textItems: [...global.textItems, textItem]
    })
  },
  actions: {
    [CREATE_TEXT_ITEM]: async (global, dispatch, item_id, text, options) => {
      let textItem = { id: uuid(), item_id, text, options };

      await dispatch[ADD_TEXT_ITEM](textItem);

      return Promise.resolve(textItem);
    }
  }
};
