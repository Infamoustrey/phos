import uuid from "uuid/v1";

const CREATE_PRESENTATION = "CREATE_PRESENTATION";
const ADD_PRESENTATION = "ADD_PRESENTATION";
const SET_PRESENTATION = "SET_PRESENTATION";

export { CREATE_PRESENTATION, ADD_PRESENTATION, SET_PRESENTATION };

export default {
  state: {
    presentation: null,
    presentations: []
  },

  reducers: {
    [ADD_PRESENTATION]: (global, dispatch, presentation) => ({
      presentations: [...global.presentations, presentation]
    }),
    [SET_PRESENTATION]: (global, dispatch, presentation) => ({
      presentation
    }),
    [CREATE_PRESENTATION]: async (global, dispatch, title, date) => {
      let presentation = { id: uuid(), title, date };
      await dispatch[ADD_PRESENTATION](presentation);
      await dispatch[SET_PRESENTATION](presentation);
    }
  }
};
