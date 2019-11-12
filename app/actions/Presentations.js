import { ADD_PRESENTAION } from "../reducers/Presentations";

export default {
  createPresentation: (title, date) => async dispatch => {
    let presentation = { title, date };

    dispatch({ type: ADD_PRESENTAION, presentation });
  }
};
