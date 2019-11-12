import { ADD_PRESENTAION } from "../reducers/Presentations";
import { SET_PRESENTAION } from "../reducers/Presentation";

export default {
  createPresentation: (title, date) => async dispatch => {
    let presentation = { title, date };

    dispatch({ type: ADD_PRESENTAION, presentation });
    dispatch({ type: SET_PRESENTAION, presentation });
  }
};
