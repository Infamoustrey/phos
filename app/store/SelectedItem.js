import { addReducer, setGlobal, getDispatch } from "reactn";

// import uuid from "uuid/v1";

const SET_ITEM = "SET_ITEM";

setGlobal({ selectedItem: null });

addReducer(SET_ITEM, (global, dispatch, item) => ({
  selectedItem: item
}));

export { SET_ITEM };
