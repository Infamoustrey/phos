import { SET_ITEM } from "./SelectedItem";

import * as uuid from "uuid/v1";

const ADD_ITEM = "ADD_ITEM";
const CREATE_ITEM = "CREATE_ITEM";

export { ADD_ITEM, CREATE_ITEM };

export default {
  state: {
    serviceItems: []
  },
  reducers: {
    [ADD_ITEM]: (global, dispatch, item) => ({
      serviceItems: [...global.serviceItems, item]
    })
  },
  actions: {
    [CREATE_ITEM]: async (
      global,
      dispatch,
      presentation_id,
      section_id,
      type,
      title
    ) => {
      let item = { id: uuid(), presentation_id, section_id, type, title };

      await dispatch[ADD_ITEM](item);
      await dispatch[SET_ITEM](item);

      return Promise.resolve(item);
    }
  }
};
