const ADD_PRESENTAION = "ADD_PRESENTATION";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_PRESENTAION:
      return [...state, action.presentation];
    default:
      return state;
  }
};

export { ADD_PRESENTAION };
