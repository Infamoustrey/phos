const SET_PRESENTAION = "SET_PRESENTAION";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PRESENTAION:
      return action.presentation;
    default:
      return state;
  }
};

export { SET_PRESENTAION };
