import * as uuid from "uuid/v1";
import { TextItem } from "../interfaces/TextItem";

const ADD_TEXT_ITEM = "ADD_TEXT_ITEM";
const CREATE_TEXT_ITEM = "CREATE_TEXT_ITEM";

export { ADD_TEXT_ITEM, CREATE_TEXT_ITEM };

export default {
  state: {
    textItems: [] as Array<TextItem>
  },
  reducers: {
    [ADD_TEXT_ITEM]: (global, dispatch, textItem: TextItem) => ({
      textItems: [...global.textItems, textItem]
    })
  },
  actions: {
    [CREATE_TEXT_ITEM]: async (
      global,
      dispatch,
      service_item_id,
      text,
      options
    ) => {
      let textItem: TextItem = { id: uuid(), service_item_id, text, options };

      await dispatch[ADD_TEXT_ITEM](textItem);

      return Promise.resolve(textItem);
    }
  }
};
