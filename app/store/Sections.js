import { addReducer, setGlobal, getDispatch } from "reactn";

import uuid from "uuid/v1";

const ADD_SECTION = "ADD_SECTION";

setGlobal({ sections: [] });

addReducer(ADD_SECTION, async (global, dispatch, section) => ({
  sections: [...global.sections, section]
}));

const createSection = async (presentation_id, title) => {
  let section = { _id: uuid(), presentation_id, title };

  await getDispatch()[ADD_SECTION](section);

  return Promise.resolve(section);
};

export { ADD_SECTION, createSection };
