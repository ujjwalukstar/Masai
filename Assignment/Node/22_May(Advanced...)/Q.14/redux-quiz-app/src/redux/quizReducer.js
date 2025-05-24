import {
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE,
} from "./actionTypes";

const initialState = {
  questions: [],
  isLoading: false,
  isError: false,
};

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZ_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case FETCH_QUIZ_SUCCESS:
      return { ...state, isLoading: false, questions: action.payload };
    case FETCH_QUIZ_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

// Thunk action
export const fetchQuizData = () => async (dispatch) => {
  dispatch({ type: FETCH_QUIZ_REQUEST });
  try {
    const res = await fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz"
    );
    const data = await res.json();
    dispatch({ type: FETCH_QUIZ_SUCCESS, payload: data.data });
  } catch (err) {
    dispatch({ type: FETCH_QUIZ_FAILURE });
  }
};
