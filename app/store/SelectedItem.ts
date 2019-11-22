import { ServiceItem } from "../interfaces/ServiceItem";

const SET_ITEM = "SET_ITEM";

export { SET_ITEM };

export default {
  state: {
    selectedItem: null as ServiceItem
  },
  reducers: {
    [SET_ITEM]: (global, dispatch, item) => ({
      selectedItem: item
    })
  }
};
