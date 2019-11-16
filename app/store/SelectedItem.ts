const SET_ITEM = "SET_ITEM";

export { SET_ITEM };

export default {
  state: {
    selectedItem: null
  },
  reducers: {
    [SET_ITEM]: (global, dispatch, item) => ({
      selectedItem: item
    })
  }
};
