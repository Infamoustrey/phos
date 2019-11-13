const ADD_TEXT_ITEM = "ADD_TEXT_ITEM";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TEXT_ITEM:
      return [...state, action.text_item];
    default:
      return state;
  }
};

export { ADD_TEXT_ITEM };
