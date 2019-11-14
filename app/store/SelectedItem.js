import { addReducer, setGlobal, getDispatch } from "reactn";

// import uuid from "uuid/v1";

const SET_ITEM = "SET_ITEM";

setGlobal({ selected_item: null });

addReducer(SET_ITEM, (global, dispatch, item) => ({
  selected_item: item
}));

export { SET_ITEM };
