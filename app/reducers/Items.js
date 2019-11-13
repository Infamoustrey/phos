const ADD_ITEM = "ADD_ITEM";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.item];
    default:
      return state;
  }
};

export { ADD_ITEM };
