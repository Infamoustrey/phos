import { addReducer, setGlobal } from "reactn";

import uuid from "uuid/v1";

const ADD_ITEM = "ADD_ITEM";

setGlobal({ items: [] });

addReducer(ADD_ITEM, (global, dispatch, section_id, type, title) => ({
  items: [
    ...global.items,
    { _id: uuid(), presentation_id, section_id, type, title }
  ]
}));

export { ADD_ITEM };
