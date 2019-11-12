const ADD_SECTION = "ADD_SECTION";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_SECTION:
      return [...state, action.section];
    default:
      return state;
  }
};

export { ADD_SECTION };
