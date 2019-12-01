import uuid from "uuid/v1";

const ADD_SECTION = "ADD_SECTION";
const CREATE_SECTION = "CREATE_SECTION";

export default {
  state: {
    sections: []
  },
  reducers: {
    [ADD_SECTION]: (global, dispatch, section) => ({
      sections: [...global.sections, section]
    })
  },
  actions: {
    [CREATE_SECTION]: async (global, dispatch, presentation_id, title) => {
      let section = { id: uuid(), presentation_id, title };

      await dispatch[ADD_SECTION](section);

      return Promise.resolve(section);
    }
  }
};

export { ADD_SECTION, CREATE_SECTION };
