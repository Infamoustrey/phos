import { addReducer, setGlobal } from "reactn";

import uuid from "uuid/v1";

const CREATE_PRESENTATION = "CREATE_PRESENTATION";

const ADD_PRESENTATION = "ADD_PRESENTATION";
const SET_PRESENTATION = "SET_PRESENTATION";

setGlobal({ presentation: null, presentations: [] });

addReducer(SET_PRESENTATION, (global, dispatch, presentation) => ({
  presentation
}));

addReducer(ADD_PRESENTATION, (global, dispatch, presentation) => ({
  presentations: [...global.presentations, presentation]
}));

addReducer(CREATE_PRESENTATION, async (global, dispatch, title, date) => {
  let presentation = { _id: uuid(), title, date };
  await dispatch[ADD_PRESENTATION](presentation);
  await dispatch[SET_PRESENTATION](presentation);
});

export { CREATE_PRESENTATION, ADD_PRESENTATION, SET_PRESENTATION };
