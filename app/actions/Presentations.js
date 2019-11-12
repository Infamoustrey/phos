import uuid from "uuid/v1";

import { ADD_PRESENTAION } from "../reducers/Presentations";
import { SET_PRESENTAION } from "../reducers/Presentation";

export default {
  createPresentation: (title, date) => async dispatch => {
    let presentation = { _id: uuid(), title, date };
    console.log(presentation);
    dispatch({ type: ADD_PRESENTAION, presentation });
    dispatch({ type: SET_PRESENTAION, presentation });
  }
};
